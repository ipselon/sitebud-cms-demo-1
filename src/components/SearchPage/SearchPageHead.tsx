import React from 'react';
import Head from 'next/head';
import {useAdaptedContent} from '@/adapters';

export function SearchPageHead() {
    const {searchPageContent, siteContent} = useAdaptedContent();
    if (searchPageContent && siteContent) {
        const {
            title,
            locale,
            baseUrl
        } = searchPageContent;
        let pageTitle: string = title;
        if (siteContent.documentAreas.metaData) {
            for(const metaDataItem of siteContent.documentAreas.metaData) {
                const {menuLogoBlock} = metaDataItem;
                if (menuLogoBlock?.logoTitle.text) {
                    pageTitle += ' | ' + menuLogoBlock?.logoTitle.text;
                }
            }
        }
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