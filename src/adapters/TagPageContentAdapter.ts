import { ContentAdapter } from '@sitebud/bridge-lib';
import { TagPageContent, TagPage_DocumentAreas } from './types';
export class TagPageContentAdapter extends ContentAdapter<TagPageContent> {
    adapt(): TagPageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: TagPageContent = {
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