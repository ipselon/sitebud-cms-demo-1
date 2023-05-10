import { DocumentContentContext, DataFieldType } from './types';
/**
 * From ArticlePage_PageBody
 */
export type ArticlePage_PageBody_ArticleHeroBlock = {
    __accessLevel?: number;
    heroTitle: { text: string };
    heroImage: {
        image: { src: string; alt: string; focusX?: number; focusY?: number };
    };
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
    defaultImage: {
        image: { src: string; alt: string; focusX?: number; focusY?: number };
    };
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
    cardViewImage: {
        image: { src: string; alt: string; focusX?: number; focusY?: number };
    };
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
    pageBody: ArticlePage_PageBody;
    card: ArticlePage_Card;
};
/**
 * Data Fields
 */
export type ArticlePage_DataFields = {
    metaDescription?: { value: string; type: DataFieldType };
    metaRobots?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type ArticlePageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    dataFields: ArticlePage_DataFields;
    documentAreas: ArticlePage_DocumentAreas;
};