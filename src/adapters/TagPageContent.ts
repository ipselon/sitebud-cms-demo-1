import { DocumentContentContext, DataFieldType } from './types';
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
    galleryListing: { documentList: Array<DocumentContentContext> };
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
    cardViewImage: {
        image: { src: string; alt: string; width: number; height: number };
    };
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
    pageBody: TagPage_PageBody;
    card: TagPage_Card;
};
/**
 * Data Fields
 */
export type TagPage_DataFields = {
    metaDescription?: { value: string; type: DataFieldType };
    metaRobots?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type TagPageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    dataFields: TagPage_DataFields;
    documentAreas: TagPage_DocumentAreas;
};