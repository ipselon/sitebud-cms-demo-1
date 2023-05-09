import { DocumentContentContext, DataFieldType } from './types';
/**
 * From CategoryPage_PageBody
 */
export type CategoryPage_PageBody_DefaultHeroBlock = {
    __accessLevel?: number;
    heroTitle: { text: string };
    heroDescription: { text: string };
    heroImage: {
        image: { src: string; alt: string; width: number; height: number };
    };
};
/**
 * From CategoryPage_PageBody
 */
export type CategoryPage_PageBody_ArticlesGalleryBlock = {
    __accessLevel?: number;
    galleryHeading: { text: string };
    galleryListing: { documentsList: Array<DocumentContentContext> };
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
    cardViewImage: {
        image: { src: string; alt: string; width: number; height: number };
    };
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
    pageBody: CategoryPage_PageBody;
    card: CategoryPage_Card;
};
/**
 * Data Fields
 */
export type CategoryPage_DataFields = {
    metaDescription?: { value: string; type: DataFieldType };
    metaRobots?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type CategoryPageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    dataFields: CategoryPage_DataFields;
    documentAreas: CategoryPage_DocumentAreas;
};