import React from 'react';
import Head from 'next/head';
import {useAdaptedContent} from '@/adapters';
import {useSiteTitle} from '@/hooks/useTitle';

export function SearchPageHead() {
    const contentContext = useAdaptedContent();
    const siteTitle: string = useSiteTitle();
    if (contentContext?.searchPageContent) {
        const {
            title,
            locale,
            documentAreas
        } = contentContext.searchPageContent;
        const pageTitle: string = siteTitle ? `${title} | ${siteTitle}` : title;
        let metaDescription: string = pageTitle;
        return (
            <>
                <Head>
                    <meta name="description" content={metaDescription}/>
                    <meta name="robots" content="noindex, nofollow"/>
                    {/* Open Graph Data */}
                    <meta property="og:description" content={metaDescription}/>
                    <meta property="og:locale" content={locale}/>
                    {/* Twitter summary card */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={metaDescription}/>
                    <title>{pageTitle}</title>
                </Head>
            </>
        );
    }
    return null;
}