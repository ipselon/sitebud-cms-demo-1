import { ContentAdapter } from '@sitebud/bridge-lib';
import { CategoryPageContent, CategoryPage_DocumentAreas } from './types';
export class CategoryPageContentAdapter extends ContentAdapter<CategoryPageContent> {
    adapt(): CategoryPageContent {
        const { content, hasRestrictedAreas, baseUrl, path, locale } =
            this._documentData;
        const result: CategoryPageContent = {
            title: content?.title || 'undefined',
            slug: content?.slug || 'undefined',
            tags: content?.tags || {},
            dateUpdated: content?.dateUpdated,
            authors: content?.authors,
            path: path || '',
            locale,
            hasRestrictedAreas,
            baseUrl: baseUrl || '',
            dataFields: {},
            documentAreas: {
                pageBody: [],
                card: [],
            },
        };
        result.dataFields = this.processDataFields();
        result.documentAreas = this.processDocumentAreas({
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