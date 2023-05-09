import { ContentAdapter } from '@sitebud/bridge-lib';
import { TagsPageContent, TagsPage_DocumentAreas } from './types';
export class TagsPageContentAdapter extends ContentAdapter<TagsPageContent> {
    adapt(): TagsPageContent {
        const { content, hasRestrictedAreas, path, locale } =
            this._documentData;
        const result: TagsPageContent = {
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
                tagsGalleryBlock: {
                    galleryListing: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
            },
        }) as TagsPage_DocumentAreas;
        return result;
    }
}