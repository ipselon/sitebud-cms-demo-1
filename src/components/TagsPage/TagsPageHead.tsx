import React from 'react';
import Head from 'next/head';
import {useAdaptedContent} from '@/adapters';

export function TagsPageHead() {
    const {tagsPageContent, siteContent} = useAdaptedContent();
    if (tagsPageContent && siteContent) {
        const {
            title,
            locale,
            baseUrl
        } = tagsPageContent;
        let pageTitle: string = title;
        if (siteContent.documentAreas.metaData) {
            for(const metaDataItem of siteContent.documentAreas.metaData) {
                const {menuLogoBlock} = metaDataItem;
                if (menuLogoBlock?.logoTitle.text) {
                    pageTitle += ' | ' + menuLogoBlock?.logoTitle.text;
                }
            }
        }
        let metaDescription: string = '';
        let metaRobots: string = '';
        if (tagsPageContent.documentAreas.metaData) {
            for (const metaDataItem of tagsPageContent.documentAreas.metaData) {
                const {basicSeoDataBlock} = metaDataItem;
                if (basicSeoDataBlock?.metaDataFields) {
                    metaDescription += basicSeoDataBlock.metaDataFields.description + ' ';
                    metaRobots = basicSeoDataBlock.metaDataFields.robots || '';
                }
            }
        }
        metaDescription = metaDescription.trim();

        return (
            <>
                <Head>
                    <meta name="description" content={metaDescription}/>
                    <meta name="robots" content={metaRobots || 'noindex, nofollow'}/>
                    {/* Open Graph Data */}
                    <meta property="og:description" content={metaDescription}/>
                    <meta property="og:locale" content={locale}/>
                    {/* Twitter summary card */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={metaDescription}/>
                    {/*<meta name="twitter:image" content={`${baseUrl}${twitterCardImage?.value}`}/>*/}
                    <title>{pageTitle}</title>
                </Head>
            </>
        );
    }
    return null;
}