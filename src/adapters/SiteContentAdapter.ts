import { ContentAdapter } from '@sitebud/bridge-lib';
import { SiteContent, Site_DocumentAreas } from './types';
export class SiteContentAdapter extends ContentAdapter<SiteContent> {
    adapt(): SiteContent {
        const { hasRestrictedAreas } = this._documentData;
        const result: SiteContent = {
            hasRestrictedAreas: !!hasRestrictedAreas,
            documentAreas: {
                metaData: [],
                mainMenu: [],
                footer: [],
            },
        };
        result.documentAreas = this.processDocumentAreas({
            metaData: {
                menuLogoBlock: {
                    logoImage: [{ name: 'image', type: 'Image' }],
                    logoTitle: [{ name: 'text', type: 'StringValue' }],
                },
            },
            mainMenu: {
                menuLinksBlock: {
                    menuLinks: [
                        { name: 'link', type: 'Link' },
                        { name: 'label', type: 'StringValue' },
                    ],
                },
                menuDocumentsBlock: {
                    menuDocuments: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
            },
            footer: {
                menuLinksBlock: {
                    menuLinks: [
                        { name: 'link', type: 'Link' },
                        { name: 'label', type: 'StringValue' },
                    ],
                },
                menuDocumentsBlock: {
                    menuDocuments: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
                copyrightBlock: {
                    copyright: [
                        { name: 'year', type: 'StringValue' },
                        { name: 'text', type: 'StringValue' },
                        { name: 'link', type: 'Link' },
                    ],
                },
                paragraphBlock: {
                    paragraph: [{ name: 'text', type: 'ParagraphText' }],
                },
            },
        }) as Site_DocumentAreas;
        return result;
    }
}