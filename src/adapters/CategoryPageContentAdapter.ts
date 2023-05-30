import { ContentAdapter } from '@sitebud/bridge-lib';
import { CategoryPageContent, CategoryPage_DocumentAreas } from './types';
export class CategoryPageContentAdapter extends ContentAdapter<CategoryPageContent> {
    adapt(): CategoryPageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: CategoryPageContent = {
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
                card: [],
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
                defaultHeroBlock: {
                    heroTitle: [{ name: 'text', type: 'HeaderText' }],
                    heroDescription: [{ name: 'text', type: 'ParagraphText' }],
                    heroImage: [{ name: 'image', type: 'Image' }],
                },
                articlesGalleryBlock: {
                    galleryHeading: [{ name: 'text', type: 'HeaderText' }],
                    galleryListing: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
            },
            card: {
                cardImageBlock: {
                    cardViewImage: [{ name: 'image', type: 'Image' }],
                },
                cardTitleBlock: {
                    cardTitle: [{ name: 'text', type: 'ParagraphText' }],
                },
            },
        }) as CategoryPage_DocumentAreas;
        return result;
    }
}