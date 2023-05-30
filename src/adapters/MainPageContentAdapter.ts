import { ContentAdapter } from '@sitebud/bridge-lib';
import { MainPageContent, MainPage_DocumentAreas } from './types';
export class MainPageContentAdapter extends ContentAdapter<MainPageContent> {
    adapt(): MainPageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: MainPageContent = {
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