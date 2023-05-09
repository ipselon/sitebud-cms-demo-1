import { ContentAdapter } from '@sitebud/bridge-lib';
import { CategoriesPageContent, CategoriesPage_DocumentAreas } from './types';
export class CategoriesPageContentAdapter extends ContentAdapter<CategoriesPageContent> {
    adapt(): CategoriesPageContent {
        const { content, hasRestrictedAreas, path, locale } =
            this._documentData;
        const result: CategoriesPageContent = {
            title: content?.title || 'undefined',
            slug: content?.slug || 'undefined',
            tags: content?.tags || {},
            dateUpdated: content?.dateUpdated,
            authors: content?.authors,
            path: path || '',
            locale,
            hasRestrictedAreas,
            dataFields: {},
            documentAreas: {
                pageBody: [],
            },
        };
        result.dataFields = this.processDataFields();
        result.documentAreas = this.processDocumentAreas({
            pageBody: {
                defaultHeadingBlock: {
                    defaultHeading: [{ name: 'text', type: 'HeaderText' }],
                },
                categoriesGalleryBlock: {
                    galleryListing: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
            },
        }) as CategoriesPage_DocumentAreas;
        return result;
    }
}