import React from 'react';
import {MainPageHead} from '@/components/MainPage/MainPageHead';
import {MainHeroBlock} from '@/components/MainPage/MainHeroBlock';
import {MainCategoryGalleryBlock} from '@/components/MainPage/MainCategoryGalleryBlock';
import {MainMenuLayout} from '@/components/Site/MainMenu/MainMenuLayout';
import {MainArticlesGalleryBlock} from '@/components/MainPage/MainArticlesGalleryBlock';
import {FooterLayout} from '@/components/Site/Footer/FooterLayout';
import {useAdaptedContent, useDocumentsTree} from '@/adapters';

export function MainPage() {
    const documentContentContext = useAdaptedContent();
    const siteNodes = useDocumentsTree();
    if (documentContentContext?.mainPageContent) {
        const {
            locale,
            documentAreas
        } = documentContentContext.mainPageContent;
        const {pageBody} = documentAreas;
        return (
            <>
                <MainPageHead />
                <main>
                    <MainMenuLayout />
                    {pageBody.map((pageBodyBlocks, idx) => {
                        if (pageBodyBlocks.mainPageHeroBlock) {
                            return (
                                <MainHeroBlock
                                    key={`mainPageHeroBlock_${idx}`}
                                    content={pageBodyBlocks.mainPageHeroBlock}
                                />
                            );
                        } else if (pageBodyBlocks.categoryGalleryBlock) {
                            return (
                                <MainCategoryGalleryBlock
                                    key={`categoryGalleryBlock_${idx}`}
                                    content={pageBodyBlocks.categoryGalleryBlock}
                                    locale={locale}
                                />
                            );
                        } else if (pageBodyBlocks.articlesGalleryBlock) {
                            return (
                                <MainArticlesGalleryBlock
                                    key={`articlesGalleryBlock_${idx}`}
                                    content={pageBodyBlocks.articlesGalleryBlock}
                                />
                            );
                        }
                    })}
                    <FooterLayout/>
                </main>
            </>
        );
    }
    return null;
}
