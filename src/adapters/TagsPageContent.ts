import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From TagsPage_MetaData
 */
export type TagsPage_MetaData_BasicSeoDataBlock = {
    __accessLevel?: number;
    metaDataFields: { description: string; robots: string };
};
/**
 * From Document Areas
 */
export type TagsPage_MetaData = Array<{
    basicSeoDataBlock?: TagsPage_MetaData_BasicSeoDataBlock;
}>;
/**
 * From TagsPage_PageBody
 */
export type TagsPage_PageBody_DefaultHeadingBlock = {
    __accessLevel?: number;
    defaultHeading: { text: string };
};
/**
 * From TagsPage_PageBody
 */
export type TagsPage_PageBody_TagsGalleryBlock = {
    __accessLevel?: number;
    galleryListing: { documentsList: DocumentsListField };
};
/**
 * From Document Areas
 */
export type TagsPage_PageBody = Array<{
    defaultHeadingBlock?: TagsPage_PageBody_DefaultHeadingBlock;
    tagsGalleryBlock?: TagsPage_PageBody_TagsGalleryBlock;
}>;
/**
 * Document Areas
 */
export type TagsPage_DocumentAreas = {
    metaData: TagsPage_MetaData;
    pageBody: TagsPage_PageBody;
};
/**
 * Document Content
 */
export type TagsPageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    documentAreas: TagsPage_DocumentAreas;
};