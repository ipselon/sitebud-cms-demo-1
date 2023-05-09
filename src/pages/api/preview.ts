import type {NextApiRequest, NextApiResponse} from 'next'

const PREVIEW_TOKEN: string | undefined = process.env.SB_PREVIEW_TOKEN;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== PREVIEW_TOKEN) {
        return res.status(401).json({ message: 'Invalid preview token' })
    }
    res.setPreviewData({});
    res.redirect(req.query.slug ? `/${req.query.slug}` : '/');
}
