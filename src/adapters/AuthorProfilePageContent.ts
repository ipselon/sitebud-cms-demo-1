import { DocumentContentContext, DataFieldType } from './types';
/**
 * From AuthorProfilePage_PageBody
 */
export type AuthorProfilePage_PageBody_AuthorProfileHeroBlock = {
    __accessLevel?: number;
    authorName: { text: string };
    description: { text: string };
    authorPicture: {
        image: { src: string; alt: string; focusX?: number; focusY?: number };
    };
};
/**
 * From AuthorProfilePage_PageBody
 */
export type AuthorProfilePage_PageBody_AuthorProfileSocialLinksBlock = {
    __accessLevel?: number;
    socialLinks: Array<{ network: string; link: string }>;
};
/**
 * From AuthorProfilePage_PageBody
 */
export type AuthorProfilePage_PageBody_ArticlesGalleryBlock = {
    __accessLevel?: number;
    galleryHeading: { text: string };
    galleryListing: { documentsList: Array<DocumentContentContext> };
};
/**
 * From AuthorProfilePage_PageBody
 */
export type AuthorProfilePage_PageBody_DefaultHeadingBlock = {
    __accessLevel?: number;
    defaultHeading: { text: string };
};
/**
 * From AuthorProfilePage_PageBody
 */
export type AuthorProfilePage_PageBody_DefaultImageBlock = {
    __accessLevel?: number;
    defaultImage: {
        image: { src: string; alt: string; focusX?: number; focusY?: number };
    };
};
/**
 * From AuthorProfilePage_PageBody
 */
export type AuthorProfilePage_PageBody_DefaultParagraphBlock = {
    __accessLevel?: number;
    defaultParagraph: { text: string };
};
/**
 * From Document Areas
 */
export type AuthorProfilePage_PageBody = Array<{
    authorProfileHeroBlock?: AuthorProfilePage_PageBody_AuthorProfileHeroBlock;
    authorProfileSocialLinksBlock?: AuthorProfilePage_PageBody_AuthorProfileSocialLinksBlock;
    articlesGalleryBlock?: AuthorProfilePage_PageBody_ArticlesGalleryBlock;
    defaultHeadingBlock?: AuthorProfilePage_PageBody_DefaultHeadingBlock;
    defaultImageBlock?: AuthorProfilePage_PageBody_DefaultImageBlock;
    defaultParagraphBlock?: AuthorProfilePage_PageBody_DefaultParagraphBlock;
}>;
/**
 * From AuthorProfilePage_AuthorByline
 */
export type AuthorProfilePage_AuthorByline_AuthorProfileAvatarBlock = {
    __accessLevel?: number;
    avatar: {
        image: { src: string; alt: string; focusX?: number; focusY?: number };
    };
};
/**
 * From AuthorProfilePage_AuthorByline
 */
export type AuthorProfilePage_AuthorByline_AuthorProfileInfoBlock = {
    __accessLevel?: number;
    info: { fullName: string; email: string };
};
/**
 * From Document Areas
 */
export type AuthorProfilePage_AuthorByline = Array<{
    authorProfileAvatarBlock?: AuthorProfilePage_AuthorByline_AuthorProfileAvatarBlock;
    authorProfileInfoBlock?: AuthorProfilePage_AuthorByline_AuthorProfileInfoBlock;
}>;
/**
 * Document Areas
 */
export type AuthorProfilePage_DocumentAreas = {
    pageBody: AuthorProfilePage_PageBody;
    authorByline: AuthorProfilePage_AuthorByline;
};
/**
 * Data Fields
 */
export type AuthorProfilePage_DataFields = {
    metaDescription?: { value: string; type: DataFieldType };
    metaRobots?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type AuthorProfilePageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    dataFields: AuthorProfilePage_DataFields;
    documentAreas: AuthorProfilePage_DocumentAreas;
};