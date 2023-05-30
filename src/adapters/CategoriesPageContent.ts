import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From CategoriesPage_MetaData
 */
export type CategoriesPage_MetaData_BasicSeoDataBlock = {
    __accessLevel?: number;
    metaDataFields: { description: string; robots: string };
};
/**
 * From Document Areas
 */
export type CategoriesPage_MetaData = Array<{
    basicSeoDataBlock?: CategoriesPage_MetaData_BasicSeoDataBlock;
}>;
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
    galleryListing: { documentsList: DocumentsListField };
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
    metaData: CategoriesPage_MetaData;
    pageBody: CategoriesPage_PageBody;
};
/**
 * Document Content
 */
export type CategoriesPageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    documentAreas: CategoriesPage_DocumentAreas;
};