import React from 'react';
import {Site_MainMenu_MenuDocumentsBlock} from '@/adapters';
import {MainMenuDocumentLinkLayout} from '@/components/Site/MainMenu/MainMenuDocumentLinkLayout';

interface MenuDocumentsBlockProps {
    content: Site_MainMenu_MenuDocumentsBlock;
}

export function MainMenuDocumentsBlock(props: MenuDocumentsBlockProps) {
    const {
        content: {
            menuDocuments: {
                documentsList
            }
        },
    } = props;

    let menuLinksElements: Array<JSX.Element> = [];
    if (documentsList && documentsList.length > 0) {
        documentsList.map((documentLinkItem, idx) => {
            menuLinksElements.push(
                <MainMenuDocumentLinkLayout key={`documentLinkItem_${idx}`} content={documentLinkItem}/>
            );
        });
    }

    return (
        <>
            {menuLinksElements}
        </>
    );
}