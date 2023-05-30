import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From CategoryPage_MetaData
 */
export type CategoryPage_MetaData_BasicSeoDataBlock = {
    __accessLevel?: number;
    metaDataFields: { description: string; robots: string };
};
/**
 * From Document Areas
 */
export type CategoryPage_MetaData = Array<{
    basicSeoDataBlock?: CategoryPage_MetaData_BasicSeoDataBlock;
}>;
/**
 * From CategoryPage_PageBody
 */
export type CategoryPage_PageBody_DefaultHeroBlock = {
    __accessLevel?: number;
    heroTitle: { text: string };
    heroDescription: { text: string };
    heroImage: { image: ImageField };
};
/**
 * From CategoryPage_PageBody
 */
export type CategoryPage_PageBody_ArticlesGalleryBlock = {
    __accessLevel?: number;
    galleryHeading: { text: string };
    galleryListing: { documentsList: DocumentsListField };
};
/**
 * From Document Areas
 */
export type CategoryPage_PageBody = Array<{
    defaultHeroBlock?: CategoryPage_PageBody_DefaultHeroBlock;
    articlesGalleryBlock?: CategoryPage_PageBody_ArticlesGalleryBlock;
}>;
/**
 * From CategoryPage_Card
 */
export type CategoryPage_Card_CardImageBlock = {
    __accessLevel?: number;
    cardViewImage: { image: ImageField };
};
/**
 * From CategoryPage_Card
 */
export type CategoryPage_Card_CardTitleBlock = {
    __accessLevel?: number;
    cardTitle: { text: string };
};
/**
 * From Document Areas
 */
export type CategoryPage_Card = Array<{
    cardImageBlock?: CategoryPage_Card_CardImageBlock;
    cardTitleBlock?: CategoryPage_Card_CardTitleBlock;
}>;
/**
 * Document Areas
 */
export type CategoryPage_DocumentAreas = {
    metaData: CategoryPage_MetaData;
    pageBody: CategoryPage_PageBody;
    card: CategoryPage_Card;
};
/**
 * Document Content
 */
export type CategoryPageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    documentAreas: CategoryPage_DocumentAreas;
};