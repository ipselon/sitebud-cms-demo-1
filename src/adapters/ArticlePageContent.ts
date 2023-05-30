import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From ArticlePage_MetaData
 */
export type ArticlePage_MetaData_BasicSeoDataBlock = {
    __accessLevel?: number;
    metaDataFields: { description: string; robots: string };
};
/**
 * From ArticlePage_MetaData
 */
export type ArticlePage_MetaData_AuthorsBylinesBlock = {
    __accessLevel?: number;
    authorsBylines: { documentsList: DocumentsListField };
};
/**
 * From ArticlePage_MetaData
 */
export type ArticlePage_MetaData_TagsListBlock = {
    __accessLevel?: number;
    tags: { documentsList: DocumentsListField };
};
/**
 * From Document Areas
 */
export type ArticlePage_MetaData = Array<{
    basicSeoDataBlock?: ArticlePage_MetaData_BasicSeoDataBlock;
    authorsBylinesBlock?: ArticlePage_MetaData_AuthorsBylinesBlock;
    tagsListBlock?: ArticlePage_MetaData_TagsListBlock;
}>;
/**
 * From ArticlePage_PageBody
 */
export type ArticlePage_PageBody_ArticleHeroBlock = {
    __accessLevel?: number;
    heroTitle: { text: string };
    heroImage: { image: ImageField };
};
/**
 * From ArticlePage_PageBody
 */
export type ArticlePage_PageBody_DefaultHeadingBlock = {
    __accessLevel?: number;
    defaultHeading: { text: string };
};
/**
 * From ArticlePage_PageBody
 */
export type ArticlePage_PageBody_DefaultParagraphBlock = {
    __accessLevel?: number;
    defaultParagraph: { text: string };
};
/**
 * From ArticlePage_PageBody
 */
export type ArticlePage_PageBody_DefaultImageBlock = {
    __accessLevel?: number;
    defaultImage: { image: ImageField };
};
/**
 * From ArticlePage_PageBody
 */
export type ArticlePage_PageBody_CodeBlock = {
    __accessLevel?: number;
    paragraph: { text: string; language: string };
};
/**
 * From Document Areas
 */
export type ArticlePage_PageBody = Array<{
    articleHeroBlock?: ArticlePage_PageBody_ArticleHeroBlock;
    defaultHeadingBlock?: ArticlePage_PageBody_DefaultHeadingBlock;
    defaultParagraphBlock?: ArticlePage_PageBody_DefaultParagraphBlock;
    defaultImageBlock?: ArticlePage_PageBody_DefaultImageBlock;
    codeBlock?: ArticlePage_PageBody_CodeBlock;
}>;
/**
 * From ArticlePage_Card
 */
export type ArticlePage_Card_CardImageBlock = {
    __accessLevel?: number;
    cardViewImage: { image: ImageField };
};
/**
 * From ArticlePage_Card
 */
export type ArticlePage_Card_CardTitleBlock = {
    __accessLevel?: number;
    cardTitle: { text: string };
};
/**
 * From ArticlePage_Card
 */
export type ArticlePage_Card_CardExcerptBlock = {
    __accessLevel?: number;
    cardExcerpt: { text: string; readMoreLabel: string };
};
/**
 * From Document Areas
 */
export type ArticlePage_Card = Array<{
    cardImageBlock?: ArticlePage_Card_CardImageBlock;
    cardTitleBlock?: ArticlePage_Card_CardTitleBlock;
    cardExcerptBlock?: ArticlePage_Card_CardExcerptBlock;
}>;
/**
 * Document Areas
 */
export type ArticlePage_DocumentAreas = {
    metaData: ArticlePage_MetaData;
    pageBody: ArticlePage_PageBody;
    card: ArticlePage_Card;
};
/**
 * Document Content
 */
export type ArticlePageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    documentAreas: ArticlePage_DocumentAreas;
};