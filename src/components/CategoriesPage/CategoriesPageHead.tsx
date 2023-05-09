import React from 'react';
import Head from 'next/head';
import {CategoriesPage_DataFields} from '@/adapters';
import {useSiteTitle} from '@/components/Site/hooks';

interface CategoriesPageHeadProps {
    title: string;
    dataFields: CategoriesPage_DataFields;
}

export function CategoriesPageHead(props: CategoriesPageHeadProps) {
    const {
        title,
        dataFields: {
            metaDescription,
            metaRobots
        },
    } = props;
    let pageTitle: string = useSiteTitle(title);
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
                <meta name="twitter:title" content={pageTitle}/>
                <meta name="twitter:description" content={metaDescription?.value || ''}/>
                {/*<meta name="twitter:image" content={pageData.twitterCard.image as string}/>*/}
                <title>{pageTitle}</title>
            </Head>
        </>
    );
}