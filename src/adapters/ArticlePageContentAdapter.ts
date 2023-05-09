import { ContentAdapter } from '@sitebud/bridge-lib';
import { ArticlePageContent, ArticlePage_DocumentAreas } from './types';
export class ArticlePageContentAdapter extends ContentAdapter<ArticlePageContent> {
    adapt(): ArticlePageContent {
        const { content, hasRestrictedAreas, baseUrl, path, locale } =
            this._documentData;
        const result: ArticlePageContent = {
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