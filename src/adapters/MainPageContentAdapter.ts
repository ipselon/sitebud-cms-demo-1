import { ContentAdapter } from '@sitebud/bridge-lib';
import { MainPageContent, MainPage_DocumentAreas } from './types';
export class MainPageContentAdapter extends ContentAdapter<MainPageContent> {
    adapt(): MainPageContent {
        const { content, hasRestrictedAreas, path, locale } =
            this._documentData;
        const result: MainPageContent = {
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
                mainPageHeroBlock: {
                    heroTitle: [{ name: 'text', type: 'HeaderText' }],
                    heroDescription: [{ name: 'text', type: 'ParagraphText' }],
                    heroBackgroundImage: [{ name: 'image', type: 'Image' }],
                },
                categoryGalleryBlock: {
                    galleryListing: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                    galleryHeading: [{ name: 'text', type: 'HeaderText' }],
                    fullGalleryLink: [{ name: 'link', type: 'DocumentsList' }],
                },
                articlesGalleryBlock: {
                    galleryHeading: [{ name: 'text', type: 'HeaderText' }],
                    galleryListing: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
            },
        }) as MainPage_DocumentAreas;
        return result;
    }
}