import path from 'path';
import fs from 'fs-extra';
import React from 'react';
import type {GetStaticPaths, NextPage} from 'next';
import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import {useRouter} from 'next/router';
import Script from 'next/script';
import {
    PreviewDataProvider,
    RawDataProvider,
    fetchRawData,
    initExternalModules,
    createPaths,
    RequestOptions,
    Data
} from '@sitebud/bridge-lib';
import {PageFacade} from '@/PageFacade';
import NotFound from './404';

export type PagePathParams = {
    route_path: Array<string>;
};

export type PagePathData = {
    params: PagePathParams;
    locale?: string;
};

const requestOptions: RequestOptions = {
    accessLevel: 0
};

export const getStaticPaths: GetStaticPaths = async () => {
    initExternalModules({fsExtra: fs, path});
    let paths: Array<PagePathData> = await createPaths();
    return {
        // We'll pre-render only these paths at build time.
        paths,
        // { fallback: blocking } will server-render pages
        // { fallback: false } means other routes should 404.
        // on-demand if the path doesn't exist.
        fallback: 'blocking'
    }
}

export async function getStaticProps({locale, params, preview}: GetStaticPropsContext) {
    const route_path = (params?.route_path as string[]) || [];
    if (route_path.length > 0) {
        let slug: string = route_path[route_path.length - 1];
        try {
            if (!preview) {
                initExternalModules({fsExtra: fs, path});
                const data: Data = await fetchRawData(requestOptions, locale, slug);
                return {
                    props: {
                        data,
                        slug,
                        isPreview: false
                    },
                    // Next.js will attempt to re-generate the page:
                    // - When a request comes in
                    // - At most once every 30 minutes
                    // revalidate: 60 * 30
                }
            }
            return {
                props: {
                    slug,
                    isPreview: true
                }
            }
        } catch (e: unknown) {
            // any failed scenario will lead to the not found result
            return {
                props: {},
                notFound: true,
            }
        }
    }
    return {
        props: {},
        notFound: true,
    }
}

const RoutePage: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps> & { children?: React.ReactNode }) => {
    const {data, slug, isPreview} = props;
    const {locale, defaultLocale} = useRouter();
    if (isPreview) {
        return (
            <PreviewDataProvider
                Script={Script}
                custom404={<NotFound/>}
                slug={slug}
                locale={locale || defaultLocale || ''}
                requestOptions={requestOptions}
            >
                <PageFacade />
            </PreviewDataProvider>
        );
    }
    return (
        <RawDataProvider data={data} custom404={<NotFound/>}>
            <PageFacade />
        </RawDataProvider>
    );
}

export default RoutePage;
