import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From SearchPage_PageBody
 */
export type SearchPage_PageBody_SearchHeroBlock = {
    __accessLevel?: number;
    searchResultsListTitle: { text: string };
    searchResultsEmptyListMessage: { text: string };
};
/**
 * From Document Areas
 */
export type SearchPage_PageBody = Array<{
    searchHeroBlock?: SearchPage_PageBody_SearchHeroBlock;
}>;
/**
 * Document Areas
 */
export type SearchPage_DocumentAreas = {
    pageBody: SearchPage_PageBody;
};
/**
 * Document Content
 */
export type SearchPageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    documentAreas: SearchPage_DocumentAreas;
};