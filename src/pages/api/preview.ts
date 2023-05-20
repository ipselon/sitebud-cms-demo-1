import type {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken';

const SB_SECRET: string | undefined = process.env.SB_SECRET;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!SB_SECRET) {
        res.status(401).send('It seems like the SiteBud CMS and your web application are not yet linked. This connection is established by setting a specific environment variable.');
        return;
    }
    try {
        const decoded: any = jwt.verify(req.query.secret as string, SB_SECRET);
        if (decoded.userEmail === 'undefined') {
            res.status(401).send('The undefined account lacks the necessary permissions to preview.');
            return;
        }
    } catch (e: any) {
        res.status(401).send(`Invalid token. ${e.message}`);
        return;
    }
    res.setPreviewData({});
    res.redirect(req.query.slug ? `/${req.query.slug}` : '/');
}
