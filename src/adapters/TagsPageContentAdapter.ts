import { ContentAdapter } from '@sitebud/bridge-lib';
import { TagsPageContent, TagsPage_DocumentAreas } from './types';
export class TagsPageContentAdapter extends ContentAdapter<TagsPageContent> {
    adapt(): TagsPageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: TagsPageContent = {
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