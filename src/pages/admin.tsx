import {useState, useEffect} from 'react';
import {NextPage, InferGetStaticPropsType} from 'next';
import {useRouter} from 'next/router';
import {AdminRedirectError} from '@sitebud/bridge-lib';

const AdminPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({owner, repo, sbSecret}) => {
    const router = useRouter();
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        if (owner && repo && sbSecret) {
            const rootUrl = `${window.location.protocol}//${window.location.host}`;
            const targetUrl = `https://app.sitebudcms.com/?owner=${encodeURIComponent(owner)}&repo=${encodeURIComponent(repo)}&referrer=${encodeURIComponent(rootUrl)}`;
            // const targetUrl = `http://localhost:3030/?owner=${encodeURIComponent(owner)}&repo=${encodeURIComponent(repo)}&referrer=${encodeURIComponent(rootUrl)}`;
            router.replace(targetUrl);
        } else {
            setError(true);
        }
    }, []);

    if (!isError) {
        return null;
    }

    return (
        <AdminRedirectError url="#" />
    );
};

export async function getStaticProps() {
    const owner = process.env.OWNER || process.env.VERCEL_GIT_REPO_OWNER || null;
    const repo = process.env.REPO || process.env.VERCEL_GIT_REPO_SLUG || null;
    const sbSecret = process.env.SB_SECRET || null;

    return {
        props: {
            owner,
            repo,
            sbSecret
        },
    };
}

export default AdminPage;
