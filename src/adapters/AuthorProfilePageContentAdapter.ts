import { ContentAdapter } from '@sitebud/bridge-lib';
import {
    AuthorProfilePageContent,
    AuthorProfilePage_DocumentAreas,
} from './types';
export class AuthorProfilePageContentAdapter extends ContentAdapter<AuthorProfilePageContent> {
    adapt(): AuthorProfilePageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: AuthorProfilePageContent = {
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
                authorByline: [],
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
                authorProfileHeroBlock: {
                    authorName: [{ name: 'text', type: 'HeaderText' }],
                    description: [{ name: 'text', type: 'ParagraphText' }],
                    authorPicture: [{ name: 'image', type: 'Image' }],
                },
                authorProfileSocialLinksBlock: {
                    socialLinks: [
                        { name: 'network', type: 'StringValue' },
                        { name: 'link', type: 'StringValue' },
                    ],
                },
                articlesGalleryBlock: {
                    galleryHeading: [{ name: 'text', type: 'HeaderText' }],
                    galleryListing: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
                defaultHeadingBlock: {
                    defaultHeading: [{ name: 'text', type: 'HeaderText' }],
                },
                defaultImageBlock: {
                    defaultImage: [{ name: 'image', type: 'Image' }],
                },
                defaultParagraphBlock: {
                    defaultParagraph: [{ name: 'text', type: 'ParagraphText' }],
                },
            },
            authorByline: {
                authorProfileAvatarBlock: {
                    avatar: [{ name: 'image', type: 'Image' }],
                },
                authorProfileInfoBlock: {
                    info: [
                        { name: 'fullName', type: 'StringValue' },
                        { name: 'email', type: 'StringValue' },
                    ],
                },
            },
        }) as AuthorProfilePage_DocumentAreas;
        return result;
    }
}