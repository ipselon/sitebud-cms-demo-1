import { ContentAdapter } from '@sitebud/bridge-lib';
import { CategoriesPageContent, CategoriesPage_DocumentAreas } from './types';
export class CategoriesPageContentAdapter extends ContentAdapter<CategoriesPageContent> {
    adapt(): CategoriesPageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: CategoriesPageContent = {
            title: content?.title || 'undefined',
            slug: content?.slug || 'undefined',
            dateUpdated: content?.dateUpdated,
            authors: content?.authors,
            path: path || '',
            locale: locale || '',
            hasRestrictedAreas: !!hasRestrictedAreas,
            documentAreas: {
                metaData: [],
                pageBody: [],
            },
        };
        result.documentAreas = this.processDocumentAreas({
            metaData: {
                basicSeoDataBlock: {
                    metaDataFields: [
                        { name: 'description', type: 'StringValue' },
                        { name: 'robots', type: 'StringValue' },
                    ],
                },
            },
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