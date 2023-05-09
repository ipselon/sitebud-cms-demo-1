import { DocumentContentContext, DataFieldType } from './types';
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
 * Data Fields
 */
export type SearchPage_DataFields = {
    metaDescription?: { value: string; type: DataFieldType };
    metaRobots?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type SearchPageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    dataFields: SearchPage_DataFields;
    documentAreas: SearchPage_DocumentAreas;
};