import React from 'react';
import {Site_MainMenu_MenuLinksBlock} from '@/adapters';
import Link from 'next/link';
import {useRouter} from 'next/router';

interface MenuLinksBlockProps {
    content: Site_MainMenu_MenuLinksBlock;
}

export function MainMenuLinksBlock(props: MenuLinksBlockProps) {
    const {content: {
        menuLinks
    }} = props;
    const {locale} = useRouter();

    let menuLinksElements: Array<JSX.Element> = [];
    if (menuLinks && menuLinks.length > 0) {
        menuLinks.map((menuLinkItem, idx) => {
            menuLinksElements.push(
                <Link
                    key={`menuLinkItem_${idx}`}
                    href={menuLinkItem.link.href}
                    locale={locale}
                    target={menuLinkItem.link.target}
                    className="block mx-4 text-gray-700 transition-colors duration-300 transform rounded-md hover:bg-gray-100"
                    prefetch={false}
                >
                    {menuLinkItem.label}
                </Link>
            );
        });
    }

    return (
        <>
            {menuLinksElements}
        </>
    );
}