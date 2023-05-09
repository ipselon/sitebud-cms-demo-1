import path from 'path';
import fs from 'fs-extra';
import React from 'react';
import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import {useRouter} from 'next/router';
import Script from 'next/script';
import {
    DocumentData,
    PreviewDataProvider,
    RawDataProvider,
    RequestOptions,
    fetchRawData,
    initExternalModules,
} from '@sitebud/bridge-lib';
import NotFound from './404';
import {PageFacade} from '@/PageFacade';

const requestOptions: RequestOptions = {
    accessLevel: 0
};

export async function getStaticProps(context: GetStaticPropsContext) {
    const {preview} = context;
    try {
        if (!preview) {
            initExternalModules({fsExtra: fs, path});
            const {pageData, siteData} = await fetchRawData(requestOptions, context.locale);
            return {
                props: {
                    pageData,
                    siteData,
                },
                // Next.js will attempt to re-generate the page:
                // - When a request comes in
                // - At most once every 30 minutes
                // revalidate: 60 * 30
            }
        }
        return {
            props: {
                pageData: {} as DocumentData,
                siteData: {} as DocumentData,
                isPreview: true
            },
            // Next.js will attempt to re-generate the page:
            // - When a request comes in
            // - At most once every 30 minutes
            // revalidate: 60 * 30
        }
    } catch (e: any) {
        // any failed scenario will lead to the not found result
        console.error(`Fail to found the page. ${e.message}`);
        return {
            props: {},
            notFound: true,
        }
    }
}

const Home = (props: InferGetStaticPropsType<typeof getStaticProps> & { children?: React.ReactNode }) => {
    const {pageData, siteData, isPreview} = props;
    const {locale, defaultLocale} = useRouter();
    if (isPreview) {
        return (
            <PreviewDataProvider Script={Script} custom404={<NotFound/>} requestOptions={requestOptions} locale={locale || defaultLocale || ''}>
                <PageFacade />
            </PreviewDataProvider>
        );
    }
    return (
        <RawDataProvider siteData={siteData} pageData={pageData} custom404={<NotFound/>}>
            <PageFacade />
        </RawDataProvider>
    );
};

export default Home;