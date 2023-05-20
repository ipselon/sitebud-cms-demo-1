import type {NextApiRequest, NextApiResponse} from 'next'

const SB_SECRET: string | undefined = process.env.SB_SECRET;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== SB_SECRET) {
        res.status(401).send('Invalid token');
        return;
    }
    res.setPreviewData({});
    res.redirect(req.query.slug ? `/${req.query.slug}` : '/');
}
