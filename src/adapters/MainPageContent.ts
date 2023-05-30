import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From MainPage_MetaData
 */
export type MainPage_MetaData_BasicSeoDataBlock = {
    __accessLevel?: number;
    metaDataFields: { description: string; robots: string };
};
/**
 * From Document Areas
 */
export type MainPage_MetaData = Array<{
    basicSeoDataBlock?: MainPage_MetaData_BasicSeoDataBlock;
}>;
/**
 * From MainPage_PageBody
 */
export type MainPage_PageBody_MainPageHeroBlock = {
    __accessLevel?: number;
    heroTitle: { text: string };
    heroDescription: { text: string };
    heroBackgroundImage: { image: ImageField };
};
/**
 * From MainPage_PageBody
 */
export type MainPage_PageBody_CategoryGalleryBlock = {
    __accessLevel?: number;
    galleryListing: { documentsList: DocumentsListField };
    galleryHeading: { text: string };
    fullGalleryLink: { link: DocumentsListField };
};
/**
 * From MainPage_PageBody
 */
export type MainPage_PageBody_ArticlesGalleryBlock = {
    __accessLevel?: number;
    galleryHeading: { text: string };
    galleryListing: { documentsList: DocumentsListField };
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
    metaData: MainPage_MetaData;
    pageBody: MainPage_PageBody;
};
/**
 * Document Content
 */
export type MainPageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    documentAreas: MainPage_DocumentAreas;
};