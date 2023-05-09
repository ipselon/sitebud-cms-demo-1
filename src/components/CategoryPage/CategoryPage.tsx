import React from 'react';
import {useAdaptedContent} from '@/adapters';
import {CategoryPageHead} from '@/components/CategoryPage/CategoryPageHead';
import {CategoryDefaultHeroBlock} from '@/components/CategoryPage/CategoryDefaultHeroBlock';
import {CategoryArticlesGalleryBlock} from '@/components/CategoryPage/CategoryArticlesGalleryBlock';
import {MainMenuLayout} from '@/components/Site/MainMenu/MainMenuLayout';
import {FooterLayout} from '@/components/Site/Footer/FooterLayout';

export function CategoryPage() {
    const {categoryPageContent} = useAdaptedContent();
    if (categoryPageContent) {
        const {dataFields, title, documentAreas} = categoryPageContent;
        const {pageBody} = documentAreas;
        return (
            <>
                <CategoryPageHead title={title} dataFields={dataFields}/>
                <main>
                    <MainMenuLayout />
                    {pageBody.map((pageBodyBlocks, idx) => {
                        if (pageBodyBlocks.defaultHeroBlock) {
                            return (
                                <CategoryDefaultHeroBlock
                                    key={`defaultHeroBlock_${idx}`}
                                    content={pageBodyBlocks.defaultHeroBlock}
                                />
                            );
                        } else if (pageBodyBlocks.articlesGalleryBlock) {
                            return (
                                <CategoryArticlesGalleryBlock
                                    key={`articlesGalleryBlock_${idx}`}
                                    content={pageBodyBlocks.articlesGalleryBlock}
                                />
                            );
                        }
                    })}
                    <FooterLayout />
                </main>
            </>
        );
    }
    return null;
}