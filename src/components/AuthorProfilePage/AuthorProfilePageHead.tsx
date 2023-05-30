import React from 'react';
import Head from 'next/head';
import {useAdaptedContent} from '@/adapters';
import {useSiteTitle} from '@/hooks/useTitle';


export function AuthorProfilePageHead() {
    const contentContext = useAdaptedContent();
    const siteTitle: string = useSiteTitle();
    if (contentContext?.authorProfilePageContent) {
        const {
            title,
            locale,
            documentAreas
        } = contentContext.authorProfilePageContent;
        const pageTitle: string = siteTitle ? `${title} | ${siteTitle}` : title;
        let metaDescription: string = '';
        let metaRobots: string = '';
        if (documentAreas.metaData) {
            for (const metaDataItem of documentAreas.metaData) {
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