import React from 'react';
import Head from 'next/head';
import {SearchPage_DataFields} from '@/adapters';
import {useSiteTitle} from '@/components/Site/hooks';

interface CategoryPageHeadProps {
    title: string;
    dataFields: SearchPage_DataFields;
}

export function SearchPageHead(props: CategoryPageHeadProps) {
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
                <title>{pageTitle}</title>
            </Head>
        </>
    );
}