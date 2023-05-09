import { DocumentContentContext, DataFieldType } from './types';
/**
 * From CategoriesPage_PageBody
 */
export type CategoriesPage_PageBody_DefaultHeadingBlock = {
    __accessLevel?: number;
    defaultHeading: { text: string };
};
/**
 * From CategoriesPage_PageBody
 */
export type CategoriesPage_PageBody_CategoriesGalleryBlock = {
    __accessLevel?: number;
    galleryListing: { documentsList: Array<DocumentContentContext> };
};
/**
 * From Document Areas
 */
export type CategoriesPage_PageBody = Array<{
    defaultHeadingBlock?: CategoriesPage_PageBody_DefaultHeadingBlock;
    categoriesGalleryBlock?: CategoriesPage_PageBody_CategoriesGalleryBlock;
}>;
/**
 * Document Areas
 */
export type CategoriesPage_DocumentAreas = {
    pageBody: CategoriesPage_PageBody;
};
/**
 * Data Fields
 */
export type CategoriesPage_DataFields = {
    metaDescription?: { value: string; type: DataFieldType };
    metaRobots?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type CategoriesPageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    dataFields: CategoriesPage_DataFields;
    documentAreas: CategoriesPage_DocumentAreas;
};