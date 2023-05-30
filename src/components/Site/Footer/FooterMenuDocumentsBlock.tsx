import React from 'react';
import {Site_Footer_MenuDocumentsBlock, useAdaptedDataUtils} from '@/adapters';
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
    const {getDocumentContentContextList} = useAdaptedDataUtils();
    let menuLinksElements: Array<JSX.Element> = [];
    getDocumentContentContextList(documentsList).forEach((documentLinkItem, idx) => {
        menuLinksElements.push(
            <FooterDocumentLinkLayout key={`documentLinkItem_${idx}`} content={documentLinkItem} locale={locale} />
        );
    });

    return (
        <>
            {menuLinksElements}
        </>
    );
}