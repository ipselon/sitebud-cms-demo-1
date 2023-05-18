import type {NextApiRequest, NextApiResponse} from 'next';
import {
    S3Client,
    ListObjectsV2Command,
} from "@aws-sdk/client-s3";

let SB_TOKEN: string | undefined = process.env.SB_TOKEN;
if (!SB_TOKEN) {
    const owner = process.env.OWNER || process.env.VERCEL_GIT_REPO_OWNER || null;
    const repo = process.env.REPO || process.env.VERCEL_GIT_REPO_SLUG || null;
    SB_TOKEN = `${owner}/${repo}`;
}
const AWS_ACCESS_KEY_ID: string | undefined = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY: string | undefined = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_REGION: string | undefined = process.env.AWS_REGION;
const BUCKET_NAME: string | undefined = process.env.BUCKET_NAME;
const CLOUD_FRONT_DOMAIN_NAME: string | undefined = process.env.CLOUD_FRONT_DOMAIN_NAME;
const S3_BUCKET_DIR: string | undefined = process.env.S3_BUCKET_DIR;

const client = new S3Client({
    region: AWS_REGION
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Handle OPTIONS requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    if (req.query.secret !== SB_TOKEN) {
        res.status(401).send('Invalid token');
        return;
    }

    if (!AWS_REGION || !BUCKET_NAME || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
        res.status(500).send('S3 Bucket is uninitialized');
        return;
    }

    const command = new ListObjectsV2Command({
        Prefix: S3_BUCKET_DIR || '',
        Bucket: BUCKET_NAME,
        // The default and maximum number of keys returned is 1000. This limits it to
        // one for demonstration purposes.
        //MaxKeys: 1000,
    });

    try {
        let isTruncated: boolean = true;
        const files: Array<{id: string; url: string; size?: number;}> = [];
        while (isTruncated) {
            const { Contents, IsTruncated, NextContinuationToken } = await client.send(command);
            if (Contents) {
                for (const contentItem of Contents) {
                    const {Key, Size} = contentItem;
                    if (Key && !Key.endsWith('/')) {
                        files.push({
                            id: S3_BUCKET_DIR ? Key.replace(S3_BUCKET_DIR, '') : Key,
                            url: CLOUD_FRONT_DOMAIN_NAME
                                ? `https://${CLOUD_FRONT_DOMAIN_NAME}/${Key}`
                                : `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${Key}`,
                            size: Size
                        });
                    }
                }
            }
            isTruncated = !!IsTruncated;
            command.input.ContinuationToken = NextContinuationToken;
        }
        res.status(200).json(files);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}
