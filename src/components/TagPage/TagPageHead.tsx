import React from 'react';
import Head from 'next/head';
import {TagPage_DataFields} from '@/adapters';

interface TagPageHeadProps {
    title: string;
    dataFields: TagPage_DataFields;
}

export function TagPageHead(props: TagPageHeadProps) {
    const {
        title,
        dataFields: {
            metaDescription,
            metaRobots
        },
    } = props;
    return (
        <>
            <Head>
                <meta name="description" content={metaDescription?.value || ''}/>
                <meta name="robots" content={metaRobots?.value || 'noindex, nofollow'} />
                {/* Open Graph Data */}
                <meta property="og:description" content={metaDescription?.value || ''} />
                {/*<meta property="og:locale" content={locale as string}/>*/}
                {/*<meta property="og:locale:alternate" content={locale} />*/}
                {/*<meta property="og:locale:alternate" content={locale} />*/}
                {/*<meta property="og:locale:alternate" content={locale} />*/}
                {/*<meta property="og:locale:alternate" content={locale} />*/}
                {/* Twitter summary card */}
                {/*<meta name="twitter:card" content={pageData.twitterCard.card}/>*/}
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={metaDescription?.value || ''}/>
                {/*<meta name="twitter:image" content={pageData.twitterCard.image as string}/>*/}
                <title>{title}</title>
            </Head>
        </>
    );
}