import {S3Client, DeleteObjectsCommand} from "@aws-sdk/client-s3";
import {NextApiRequest, NextApiResponse} from 'next';

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
const S3_BUCKET_DIR: string | undefined = process.env.S3_BUCKET_DIR;

const s3Client = new S3Client({ region: AWS_REGION });

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
    if (req.method !== "DELETE") {
        res.status(405).end();
        return;
    }

    if (!AWS_REGION || !BUCKET_NAME || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
        res.status(500).send('S3 Bucket is uninitialized');
        return;
    }

    if (!req.body.filenames || req.body.filenames.lenght > 0) {
        res.status(500).send('Missing file names in the request');
        return;
    }

    const Objects: Array<{Key: string}> = req.body.filenames.map((fileName: string) => {
        return {Key: S3_BUCKET_DIR ? `${S3_BUCKET_DIR}${fileName}` : fileName}
    });

    const command = new DeleteObjectsCommand({
        Bucket: BUCKET_NAME,
        Delete: {
            Objects,
        },
    });

    try {
        const { Deleted } = await s3Client.send(command);
        if (Deleted && Deleted.length === Objects.length) {
            res.status(200).json({});
        } else {
            res.status(500).send(`Deleted only ${Deleted?.length} objects of ${Objects.length} requested.`);
        }
    } catch (err: any) {
        console.error(err);
        res.status(500).send(`Error deleting objects. ${err.message}`);
    }
}
