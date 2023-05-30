import { ContentAdapter } from '@sitebud/bridge-lib';
import { SearchPageContent, SearchPage_DocumentAreas } from './types';
export class SearchPageContentAdapter extends ContentAdapter<SearchPageContent> {
    adapt(): SearchPageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: SearchPageContent = {
            title: content?.title || 'undefined',
            slug: content?.slug || 'undefined',
            dateUpdated: content?.dateUpdated,
            authors: content?.authors,
            path: path || '',
            locale: locale || '',
            hasRestrictedAreas: !!hasRestrictedAreas,
            documentAreas: {
                pageBody: [],
            },
        };
        result.documentAreas = this.processDocumentAreas({
            pageBody: {
                searchHeroBlock: {
                    searchResultsListTitle: [
                        { name: 'text', type: 'HeaderText' },
                    ],
                    searchResultsEmptyListMessage: [
                        { name: 'text', type: 'ParagraphText' },
                    ],
                },
            },
        }) as SearchPage_DocumentAreas;
        return result;
    }
}