import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From TagPage_MetaData
 */
export type TagPage_MetaData_BasicSeoDataBlock = {
    __accessLevel?: number;
    metaDataFields: { description: string; robots: string };
};
/**
 * From Document Areas
 */
export type TagPage_MetaData = Array<{
    basicSeoDataBlock?: TagPage_MetaData_BasicSeoDataBlock;
}>;
/**
 * From TagPage_PageBody
 */
export type TagPage_PageBody_DefaultHeadingBlock = {
    __accessLevel?: number;
    defaultHeading: { text: string };
};
/**
 * From TagPage_PageBody
 */
export type TagPage_PageBody_TagArticlesGalleryBlock = {
    __accessLevel?: number;
    galleryListing: { documentList: DocumentsListField };
};
/**
 * From Document Areas
 */
export type TagPage_PageBody = Array<{
    defaultHeadingBlock?: TagPage_PageBody_DefaultHeadingBlock;
    tagArticlesGalleryBlock?: TagPage_PageBody_TagArticlesGalleryBlock;
}>;
/**
 * From TagPage_Card
 */
export type TagPage_Card_CardImageBlock = {
    __accessLevel?: number;
    cardViewImage: { image: ImageField };
};
/**
 * From TagPage_Card
 */
export type TagPage_Card_CardTitleBlock = {
    __accessLevel?: number;
    cardTitle: { text: string };
};
/**
 * From TagPage_Card
 */
export type TagPage_Card_CardExcerptBlock = {
    __accessLevel?: number;
    cardExcerpt: { text: string; readMoreLabel: string };
};
/**
 * From Document Areas
 */
export type TagPage_Card = Array<{
    cardImageBlock?: TagPage_Card_CardImageBlock;
    cardTitleBlock?: TagPage_Card_CardTitleBlock;
    cardExcerptBlock?: TagPage_Card_CardExcerptBlock;
}>;
/**
 * Document Areas
 */
export type TagPage_DocumentAreas = {
    metaData: TagPage_MetaData;
    pageBody: TagPage_PageBody;
    card: TagPage_Card;
};
/**
 * Document Content
 */
export type TagPageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    documentAreas: TagPage_DocumentAreas;
};