import { DocumentContentContext, DataFieldType } from './types';
/**
 * From MainPage_PageBody
 */
export type MainPage_PageBody_MainPageHeroBlock = {
    __accessLevel?: number;
    heroTitle: { text: string };
    heroDescription: { text: string };
    heroBackgroundImage: {
        image: { src: string; alt: string; width: number; height: number };
    };
};
/**
 * From MainPage_PageBody
 */
export type MainPage_PageBody_CategoryGalleryBlock = {
    __accessLevel?: number;
    galleryListing: { documentsList: Array<DocumentContentContext> };
    galleryHeading: { text: string };
    fullGalleryLink: { link: Array<DocumentContentContext> };
};
/**
 * From MainPage_PageBody
 */
export type MainPage_PageBody_ArticlesGalleryBlock = {
    __accessLevel?: number;
    galleryHeading: { text: string };
    galleryListing: { documentsList: Array<DocumentContentContext> };
};
/**
 * From Document Areas
 */
export type MainPage_PageBody = Array<{
    mainPageHeroBlock?: MainPage_PageBody_MainPageHeroBlock;
    categoryGalleryBlock?: MainPage_PageBody_CategoryGalleryBlock;
    articlesGalleryBlock?: MainPage_PageBody_ArticlesGalleryBlock;
}>;
/**
 * Document Areas
 */
export type MainPage_DocumentAreas = {
    pageBody: MainPage_PageBody;
};
/**
 * Data Fields
 */
export type MainPage_DataFields = {
    metaDescription?: { value: string; type: DataFieldType };
    metaRobots?: { value: string; type: DataFieldType };
    twitterCardImage?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type MainPageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    dataFields: MainPage_DataFields;
    documentAreas: MainPage_DocumentAreas;
};