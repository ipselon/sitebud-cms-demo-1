import React from 'react';
import {Site_MainMenu_MenuDocumentsBlock, useAdaptedDataUtils} from '@/adapters';
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
    const {getDocumentContentContextList} = useAdaptedDataUtils();

    let menuLinksElements: Array<JSX.Element> = [];
    getDocumentContentContextList(documentsList).forEach((documentLinkItem, idx) => {
        menuLinksElements.push(
            <MainMenuDocumentLinkLayout key={`documentLinkItem_${idx}`} content={documentLinkItem}/>
        );
    });

    return (
        <>
            {menuLinksElements}
        </>
    );
}