import React from 'react';
import {Site_Footer_MenuLinksBlock} from '@/adapters';
import Link from 'next/link';

interface FooterMenuLinksBlockProps {
    locale?: string;
    content: Site_Footer_MenuLinksBlock;
}

export function FooterMenuLinksBlock(props: FooterMenuLinksBlockProps) {
    const {
        content: {
            menuLinks
        },
        locale
    } = props;

    let menuLinksElements: Array<JSX.Element> = [];
    if (menuLinks && menuLinks.length > 0) {
        menuLinks.map((menuLinkItem, idx) => {
            menuLinksElements.push(
                <Link
                    key={`menuLinkItem_${idx}`}
                    href={menuLinkItem.link.href}
                    locale={locale}
                    target={menuLinkItem.link.target}
                    className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500"
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
