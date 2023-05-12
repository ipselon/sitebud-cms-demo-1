import {useState, useEffect} from 'react';
import {NextPage, InferGetStaticPropsType} from 'next';
import {useRouter} from 'next/router';
import {AdminRedirectError} from '@sitebud/bridge-lib';

let siteBudCMSBaseURL: string = 'http://localhost:3030';
if (process.env.NODE_ENV === 'production') {
    siteBudCMSBaseURL = 'https://app.sitebudcms.com';
}

const DemoPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({owner, repo}) => {
    const router = useRouter();
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        if (owner && repo) {
            const rootUrl = `${window.location.protocol}//${window.location.host}`;
            const targetUrl = `${siteBudCMSBaseURL}/demo?owner=${encodeURIComponent(owner)}&repo=${encodeURIComponent(repo)}&referrer=${encodeURIComponent(rootUrl)}`;
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
    const owner = process.env.OWNER || process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER || null;
    const repo = process.env.REPO || process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG || null;

    return {
        props: {
            owner,
            repo,
        },
    };
}

export default DemoPage;
