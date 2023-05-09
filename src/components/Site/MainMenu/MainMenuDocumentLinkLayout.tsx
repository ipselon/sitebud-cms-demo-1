import React from 'react';
import {DocumentContentContext} from '@/adapters';
import Link from 'next/link';
import {useRouter} from 'next/router';

interface MainMenuDocumentLinkLayoutProps {
    content: DocumentContentContext;
}

export function MainMenuDocumentLinkLayout(props: MainMenuDocumentLinkLayoutProps) {
    const {content: {
        articlePageContent,
        categoriesPageContent,
        categoryPageContent,
        mainPageContent,
        tagsPageContent,
        tagPageContent,
        searchPageContent
    }} = props;
    const {locale} = useRouter();
    let title: string | undefined;
    let path: string | undefined;
    if (articlePageContent) {
        title = articlePageContent.title;
        path = articlePageContent.path;
    } else if (categoriesPageContent) {
        title = categoriesPageContent.title;
        path = categoriesPageContent.path;
    } else if (categoryPageContent) {
        title = categoryPageContent.title;
        path = categoryPageContent.path;
    } else if (mainPageContent) {
        title = mainPageContent.title;
        path = mainPageContent.path;
    } else if (tagsPageContent) {
        title = tagsPageContent.title;
        path = tagsPageContent.path;
    } else if (tagPageContent) {
        title = tagPageContent.title;
        path = tagPageContent.path;
    } else if (searchPageContent) {
        title = searchPageContent.title;
        path = searchPageContent.path;
    }
    if (title && path) {
        return (
            <Link
                href={path}
                locale={locale}
                className="block mx-4 px-2 py-1 text-gray-700 transition-colors duration-300 transform rounded-md hover:bg-gray-100"
                prefetch={false}
            >
                {title}
            </Link>
        );
    }
    return null;
}