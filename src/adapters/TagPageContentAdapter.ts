import { ContentAdapter } from '@sitebud/bridge-lib';
import { TagPageContent, TagPage_DocumentAreas } from './types';
export class TagPageContentAdapter extends ContentAdapter<TagPageContent> {
    adapt(): TagPageContent {
        const { content, hasRestrictedAreas, baseUrl, path, locale } =
            this._documentData;
        const result: TagPageContent = {
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
                defaultHeadingBlock: {
                    defaultHeading: [{ name: 'text', type: 'HeaderText' }],
                },
                tagArticlesGalleryBlock: {
                    galleryListing: [
                        { name: 'documentList', type: 'DocumentsList' },
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
                cardExcerptBlock: {
                    cardExcerpt: [
                        { name: 'text', type: 'ParagraphText' },
                        { name: 'readMoreLabel', type: 'StringValue' },
                    ],
                },
            },
        }) as TagPage_DocumentAreas;
        return result;
    }
}