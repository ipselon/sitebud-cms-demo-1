import React from 'react';
import {DocumentContentContext} from '@/adapters';
import Link from 'next/link';

interface FooterDocumentLinkLayoutProps {
    locale?: string;
    content: DocumentContentContext;
}

export function FooterDocumentLinkLayout(props: FooterDocumentLinkLayoutProps) {
    const {content, locale} = props;
    let title: string | undefined;
    let path: string | undefined;
    if (content.articlePageContent) {
        title = content.articlePageContent.title;
        path = content.articlePageContent.path;
    } else if (content.categoriesPageContent) {
        title = content.categoriesPageContent.title;
        path = content.categoriesPageContent.path;
    } else if (content.categoryPageContent) {
        title = content.categoryPageContent.title;
        path = content.categoryPageContent.path;
    } else if (content.mainPageContent) {
        title = content.mainPageContent.title;
        path = content.mainPageContent.path;
    }
    if (title && path) {
        return (
            <Link
                href={path}
                locale={locale}
                aria-label={title}
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500"
                prefetch={false}
            >
                {title}
            </Link>
        );
    }
    return null;
}