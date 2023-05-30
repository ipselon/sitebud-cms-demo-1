import { ContentAdapter } from '@sitebud/bridge-lib';
import { ArticlePageContent, ArticlePage_DocumentAreas } from './types';
export class ArticlePageContentAdapter extends ContentAdapter<ArticlePageContent> {
    adapt(): ArticlePageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: ArticlePageContent = {
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
                authorsBylinesBlock: {
                    authorsBylines: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
                tagsListBlock: {
                    tags: [{ name: 'documentsList', type: 'DocumentsList' }],
                },
            },
            pageBody: {
                articleHeroBlock: {
                    heroTitle: [{ name: 'text', type: 'HeaderText' }],
                    heroImage: [{ name: 'image', type: 'Image' }],
                },
                defaultHeadingBlock: {
                    defaultHeading: [{ name: 'text', type: 'HeaderText' }],
                },
                defaultParagraphBlock: {
                    defaultParagraph: [{ name: 'text', type: 'ParagraphText' }],
                },
                defaultImageBlock: {
                    defaultImage: [{ name: 'image', type: 'Image' }],
                },
                codeBlock: {
                    paragraph: [
                        { name: 'text', type: 'ParagraphText' },
                        { name: 'language', type: 'StringValue' },
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
        }) as ArticlePage_DocumentAreas;
        return result;
    }
}