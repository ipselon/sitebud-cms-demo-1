import { DocumentContentContext, DataFieldType } from './types';
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
    galleryListing: { documentsList: Array<DocumentContentContext> };
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
    pageBody: TagsPage_PageBody;
};
/**
 * Data Fields
 */
export type TagsPage_DataFields = {
    metaDescription?: { value: string; type: DataFieldType };
    metaRobots?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type TagsPageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    dataFields: TagsPage_DataFields;
    documentAreas: TagsPage_DocumentAreas;
};