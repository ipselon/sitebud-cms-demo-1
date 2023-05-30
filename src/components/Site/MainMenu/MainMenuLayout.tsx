import React from 'react';
import {
    Site_Footer_MenuDocumentsBlock,
    Site_MainMenu_MenuLinksBlock,
    useAdaptedContent,
    ImageField
} from '@/adapters';
import Link from 'next/link';
import {MainMenuLinksBlock} from '@/components/Site/MainMenu/MainMenuLinksBlock';
import {MainMenuDocumentsBlock} from '@/components/Site/MainMenu/MainMenuDocumentsBlock';
import {MainMenuMobile} from '@/components/Site/MainMenu/MainMenuMobile';
import {MainMenuLocaleSwitcher} from '@/components/Site/MainMenu/MainMenuLocaleSwitcher';
import {useRouter} from 'next/router';

export function MainMenuLayout() {
    const contentContext = useAdaptedContent();
    const {locale} = useRouter();

    if (!contentContext?.siteContent) {
        return null;
    }

    let siteLogoImage: ImageField | undefined = undefined;
    let siteTitle: string | undefined = undefined;
    if (contentContext.siteContent.documentAreas.metaData) {
        for(const metaDataItem of contentContext.siteContent.documentAreas.metaData) {
            const {menuLogoBlock} = metaDataItem;
            siteLogoImage = menuLogoBlock?.logoImage.image;
            siteTitle = menuLogoBlock?.logoTitle.text;
        }
    }

    let menuDocumentsBlock: Site_Footer_MenuDocumentsBlock | undefined = undefined;
    let menuLinksBlock: Site_MainMenu_MenuLinksBlock | undefined = undefined;

    for (const contentItem of contentContext.siteContent.documentAreas.mainMenu) {
        if (contentItem.menuDocumentsBlock) {
            menuDocumentsBlock = contentItem.menuDocumentsBlock;
        }
        if (contentItem.menuLinksBlock) {
            menuLinksBlock = contentItem.menuLinksBlock;
        }
    }

    return (
        <section className="w-full">
            <div className="container">
                <div className="w-full py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="mx-auto" locale={locale} prefetch={false}>
                                <img
                                    className="w-auto h-6 sm:h-7"
                                    src={siteLogoImage?.src}
                                    alt={siteTitle}
                                />
                            </Link>
                            <Link
                                href="/"
                                locale={locale}
                                className="mx-4 text-2xl text-gray-500"
                                prefetch={false}
                            >
                                {siteTitle}
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-col lg:hidden">
                                <MainMenuMobile
                                    menuLinksBlock={menuLinksBlock}
                                    menuDocumentsBlock={menuDocumentsBlock}
                                />
                            </div>
                            <div className="lg:flex lg:items-center hidden">
                                {menuLinksBlock && (
                                    <MainMenuLinksBlock content={menuLinksBlock} />
                                )}
                                {menuDocumentsBlock && (
                                    <MainMenuDocumentsBlock content={menuDocumentsBlock}/>
                                )}
                            </div>
                            <MainMenuLocaleSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}