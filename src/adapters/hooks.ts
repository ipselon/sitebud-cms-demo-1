import { useContext } from 'react';
import { Data, DocumentData } from '@sitebud/bridge-lib';
import { DocumentContentContextInstance } from './ContentAdapterProvider';
import { ArticlePageContentAdapter } from './ArticlePageContentAdapter';
import { AuthorProfilePageContentAdapter } from './AuthorProfilePageContentAdapter';
import { CategoriesPageContentAdapter } from './CategoriesPageContentAdapter';
import { CategoryPageContentAdapter } from './CategoryPageContentAdapter';
import { MainPageContentAdapter } from './MainPageContentAdapter';
import { SearchPageContentAdapter } from './SearchPageContentAdapter';
import { SiteContentAdapter } from './SiteContentAdapter';
import { TagPageContentAdapter } from './TagPageContentAdapter';
import { TagsPageContentAdapter } from './TagsPageContentAdapter';

import type { DocumentContentContext } from './types';

function adaptDocumentData(documentData: DocumentData): DocumentContentContext {
    const documentContentContext: DocumentContentContext = {};
    if (documentData && documentData.content && documentData.name) {
        switch (documentData.name) {
            case 'ArticlePage':
                documentContentContext.articlePageContent =
                    new ArticlePageContentAdapter(
                        documentData,
                        adaptDocumentData
                    ).adapt();
                break;

            case 'AuthorProfilePage':
                documentContentContext.authorProfilePageContent =
                    new AuthorProfilePageContentAdapter(
                        documentData,
                        adaptDocumentData
                    ).adapt();
                break;

            case 'CategoriesPage':
                documentContentContext.categoriesPageContent =
                    new CategoriesPageContentAdapter(
                        documentData,
                        adaptDocumentData
                    ).adapt();
                break;

            case 'CategoryPage':
                documentContentContext.categoryPageContent =
                    new CategoryPageContentAdapter(
                        documentData,
                        adaptDocumentData
                    ).adapt();
                break;

            case 'MainPage':
                documentContentContext.mainPageContent =
                    new MainPageContentAdapter(
                        documentData,
                        adaptDocumentData
                    ).adapt();
                break;

            case 'SearchPage':
                documentContentContext.searchPageContent =
                    new SearchPageContentAdapter(
                        documentData,
                        adaptDocumentData
                    ).adapt();
                break;

            case 'Site':
                documentContentContext.siteContent = new SiteContentAdapter(
                    documentData,
                    adaptDocumentData
                ).adapt();
                break;

            case 'TagPage':
                documentContentContext.tagPageContent =
                    new TagPageContentAdapter(
                        documentData,
                        adaptDocumentData
                    ).adapt();
                break;

            case 'TagsPage':
                documentContentContext.tagsPageContent =
                    new TagsPageContentAdapter(
                        documentData,
                        adaptDocumentData
                    ).adapt();
                break;
        }
    }
    return documentContentContext;
}

function adaptData(data: Data): DocumentContentContext {
    const { pageData, siteData } = data;
    let documentContentContext: DocumentContentContext =
        adaptDocumentData(pageData);
    documentContentContext = {
        ...documentContentContext,
        ...adaptDocumentData(siteData),
    };
    return documentContentContext;
}

export function useDocumentDataAdapter(data: Data): DocumentContentContext {
    return adaptData(data);
}

export function useAdaptedContent(): DocumentContentContext {
    return useContext(DocumentContentContextInstance);
}
