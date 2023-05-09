import { ContentAdapter } from '@sitebud/bridge-lib';
import { SiteContent, Site_DocumentAreas } from './types';
export class SiteContentAdapter extends ContentAdapter<SiteContent> {
    adapt(): SiteContent {
        const { content, hasRestrictedAreas, tagsLinks, availableLocales } =
            this._documentData;
        const result: SiteContent = {
            hasRestrictedAreas,
            availableLocales: availableLocales || [],
            tagsLinks: tagsLinks || {},
            authorProfiles: {},
            dataFields: {},
            documentAreas: {
                mainMenu: [],
                footer: [],
            },
        };
        result.dataFields = this.processDataFields();
        result.documentAreas = this.processDocumentAreas({
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
        result.authorProfiles = this.processAuthorsProfiles();
        return result;
    }
}