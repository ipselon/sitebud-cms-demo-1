import React from 'react';
import {AdaptedDataProvider} from '@/adapters';
import {MainPage} from '@/components/MainPage/MainPage';
import {CategoryPage} from '@/components/CategoryPage/CategoryPage';
import {CategoriesPage} from '@/components/CategoriesPage/CategoriesPage';
import {ArticlePage} from '@/components/ArticlePage/ArticlePage';
import {AuthorProfilePage} from '@/components/AuthorProfilePage/AuthorProfilePage';
import {TagPage} from '@/components/TagPage/TagPage';
import {TagsPage} from '@/components/TagsPage/TagsPage';
import {SearchPage} from '@/components/SearchPage/SearchPage';

export function PageFacade() {
    return (
        <AdaptedDataProvider>
            <MainPage />
            <CategoryPage />
            <CategoriesPage />
            <ArticlePage />
            <AuthorProfilePage />
            <SearchPage />
            <TagPage />
            <TagsPage />
        </AdaptedDataProvider>
    );
}
