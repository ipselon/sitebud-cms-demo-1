import { ArticlePageContent } from './ArticlePageContent';
import { AuthorProfilePageContent } from './AuthorProfilePageContent';
import { CategoriesPageContent } from './CategoriesPageContent';
import { CategoryPageContent } from './CategoryPageContent';
import { MainPageContent } from './MainPageContent';
import { SearchPageContent } from './SearchPageContent';
import { SiteContent } from './SiteContent';
import { TagPageContent } from './TagPageContent';
import { TagsPageContent } from './TagsPageContent';
export * from './ArticlePageContent';
export * from './AuthorProfilePageContent';
export * from './CategoriesPageContent';
export * from './CategoryPageContent';
export * from './MainPageContent';
export * from './SearchPageContent';
export * from './SiteContent';
export * from './TagPageContent';
export * from './TagsPageContent';

export type DocumentClass =
    | 'ArticlePage'
    | 'AuthorProfilePage'
    | 'CategoriesPage'
    | 'CategoryPage'
    | 'MainPage'
    | 'SearchPage'
    | 'Site'
    | 'TagPage'
    | 'TagsPage';

export type DocumentContentContext = {
    articlePageContent?: ArticlePageContent;
    authorProfilePageContent?: AuthorProfilePageContent;
    categoriesPageContent?: CategoriesPageContent;
    categoryPageContent?: CategoryPageContent;
    mainPageContent?: MainPageContent;
    searchPageContent?: SearchPageContent;
    siteContent?: SiteContent;
    tagPageContent?: TagPageContent;
    tagsPageContent?: TagsPageContent;
};

export type DocumentNode = {
    id: string;
    path: string;
    name: string;
    documentClass: DocumentClass;
    documentContentContext: DocumentContentContext;
    children: Array<DocumentNode>;
};

export type DocumentsListField = {
    parentDocumentIds?: Array<string>;
    documentIds?: Array<string>;
};

export type ImageField = {
    src: string;
    alt: string;
    focusX?: number;
    focusY?: number;
};

export type LinkField = { href: string; target: string };
