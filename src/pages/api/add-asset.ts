import jwt from 'jsonwebtoken';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {NextApiRequest, NextApiResponse} from 'next';

const SB_SECRET: string | undefined = process.env.SB_SECRET;
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
    if (!SB_SECRET) {
        res.status(401).send('It seems like the SiteBud CMS and the web application are not yet linked. This connection is established by setting a specific environment variable.');
        return;
    }
    try {
        const decoded: any = jwt.verify(req.query.secret as string, SB_SECRET);
        if (decoded.userEmail === 'demo@demo.com') {
            res.status(401).send('The demo account lacks the necessary permissions to add images.');
            return;
        }
        if (decoded.userEmail === 'undefined') {
            res.status(401).send('The undefined account lacks the necessary permissions to add images.');
            return;
        }
    } catch (e: any) {
        res.status(401).send(`Invalid token. ${e.message}`);
        return;
    }
    if (req.method !== "POST") {
        res.status(405).end();
        return;
    }
    if (!AWS_REGION || !BUCKET_NAME || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
        res.status(500).send('S3 Bucket is uninitialized');
        return;
    }

    if (!req.body.filename) {
        res.status(500).send('Missing file name in the request');
        return;
    }

    const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: S3_BUCKET_DIR ? `${S3_BUCKET_DIR}/${req.body.filename}` : req.body.filename
    });

    try {
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        res.status(200).json({ url: signedUrl });
    } catch (err: any) {
        console.error(err);
        res.status(500).send(`Error generating presigned URL. ${err.message}`);
    }
}
