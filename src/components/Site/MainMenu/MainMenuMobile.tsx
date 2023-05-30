import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Menu} from '@headlessui/react';
import {
    Site_MainMenu_MenuLinksBlock,
    Site_Footer_MenuDocumentsBlock, useAdaptedDataUtils
} from '@/adapters';
import {MainMenuDocumentLinkLayout} from './MainMenuDocumentLinkLayout';

interface MainMenuMobileProps {
    menuLinksBlock?: Site_MainMenu_MenuLinksBlock;
    menuDocumentsBlock?: Site_Footer_MenuDocumentsBlock;
}

export function MainMenuMobile(props: MainMenuMobileProps) {
    const {locale} = useRouter();
    const {menuLinksBlock, menuDocumentsBlock} = props;
    const {getDocumentContentContextList} = useAdaptedDataUtils();
    const menuItems: Array<JSX.Element> = [];
    let index: number = 0;
    for (const menuDocumentItem of getDocumentContentContextList(menuDocumentsBlock?.menuDocuments.documentsList)) {
        menuItems.push(
            <Menu.Item key={`menuDocument_${index}`}>
                {() => (
                    <MainMenuDocumentLinkLayout content={menuDocumentItem}/>
                )}
            </Menu.Item>
        );
        index++;
    }
    if (menuLinksBlock?.menuLinks) {
        for (const menuLinkItem of menuLinksBlock.menuLinks) {
            menuItems.push(
                <Menu.Item key={`menuLinkItem_${index}`}>
                    {() => (
                        <Link
                            href={menuLinkItem.link.href}
                            locale={locale}
                            target={menuLinkItem.link.target}
                            className="block mx-4 text-gray-700 transition-colors duration-300 transform rounded-md hover:bg-gray-100"
                            prefetch={false}
                        >
                            {menuLinkItem.label}
                        </Link>
                    )}
                </Menu.Item>
            );
            index++;
        }
    }


    return (
        <div className="relative inline-block">
            <Menu>
                <Menu.Button
                    className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         viewBox="0 0 16 16" className="h-6 w-6">
                        <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </Menu.Button>
                <Menu.Items
                    className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white border-gray-300 border-[1px] rounded-md shadow-xl">
                    {menuItems}
                </Menu.Items>
            </Menu>
        </div>
    );
}