import React from 'react';
import Head from 'next/head';
import {useAdaptedContent} from '@/adapters';

export function MainPageHead() {
    const {mainPageContent, siteContent} = useAdaptedContent();
    if (mainPageContent && siteContent) {
        const {
            title,
            locale,
            baseUrl,
            dataFields: {
                metaDescription,
                metaRobots,
                twitterCardImage
            },
        } = mainPageContent;
        const {dataFields: {siteTitle}} = siteContent;
        let pageTitle: string = `${title} | ${siteTitle?.value}`;
        return (
            <>
                <Head>
                    <meta name="description" content={metaDescription?.value || ''}/>
                    <meta name="robots" content={metaRobots?.value || 'noindex, nofollow'}/>
                    {/* Open Graph Data */}
                    <meta property="og:description" content={metaDescription?.value || ''}/>
                    <meta property="og:locale" content={locale}/>
                    {/* Twitter summary card */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={metaDescription?.value || ''}/>
                    <meta name="twitter:image" content={`${baseUrl}${twitterCardImage?.value}`}/>
                    <title>{pageTitle}</title>
                </Head>
            </>
        );
    }
    return null;
}
