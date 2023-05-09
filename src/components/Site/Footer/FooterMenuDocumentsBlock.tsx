import React from 'react';
import {Site_Footer_MenuDocumentsBlock} from '@/adapters';
import {FooterDocumentLinkLayout} from './FooterDocumentLinkLayout';

interface FooterMenuDocumentsBlockProps {
    locale?: string;
    content: Site_Footer_MenuDocumentsBlock;
}

export function FooterMenuDocumentsBlock(props: FooterMenuDocumentsBlockProps) {
    const {
        content: {
        menuDocuments: {
            documentsList
        }
    },
        locale
    } = props;

    let menuLinksElements: Array<JSX.Element> = [];
    if (documentsList && documentsList.length > 0) {
        documentsList.map((documentLinkItem, idx) => {
            menuLinksElements.push(
                <FooterDocumentLinkLayout key={`documentLinkItem_${idx}`} content={documentLinkItem} locale={locale} />
            );
        });
    }

    return (
        <>
            {menuLinksElements}
        </>
    );
}