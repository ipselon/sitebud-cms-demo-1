import type {NextApiRequest, NextApiResponse} from 'next'

let SB_TOKEN: string | undefined = process.env.SB_TOKEN;
if (!SB_TOKEN) {
    const owner = process.env.OWNER || process.env.VERCEL_GIT_REPO_OWNER || null;
    const repo = process.env.REPO || process.env.VERCEL_GIT_REPO_SLUG || null;
    SB_TOKEN = `${owner}/${repo}`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== SB_TOKEN) {
        res.status(401).send('Invalid preview token');
        return;
    }
    res.setPreviewData({});
    res.redirect(req.query.slug ? `/${req.query.slug}` : '/');
}
