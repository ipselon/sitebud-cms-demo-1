import React from 'react';
import {useAdaptedContent} from '@/adapters';
import {CategoriesPageHead} from '@/components/CategoriesPage/CategoriesPageHead';
import {CategoriesCategoriesGalleryBlock} from '@/components/CategoriesPage/CategoriesCategoriesGalleryBlock';
import {MainMenuLayout} from '@/components/Site/MainMenu/MainMenuLayout';
import {FooterLayout} from '@/components/Site/Footer/FooterLayout';

export function CategoriesPage() {
    const contentContext = useAdaptedContent();
    if (contentContext?.categoriesPageContent) {
        const {documentAreas} = contentContext.categoriesPageContent;
        const {pageBody} = documentAreas;
        return (
            <>
                <CategoriesPageHead />
                <main>
                    <MainMenuLayout />
                    <section id="groups-gallery" className="w-full pb-10">
                        <div className="container">
                            {pageBody.map((pageBodyBlocks, idx) => {
                                if (pageBodyBlocks.defaultHeadingBlock) {
                                    return (
                                        <div key={`defaultHeadingBlock_${idx}`}
                                             className="flex items-center justify-between">
                                            <div className="w-full custom-prose text-gray-800 py-8">
                                                <div
                                                    dangerouslySetInnerHTML={{__html: pageBodyBlocks.defaultHeadingBlock.defaultHeading.text}}></div>
                                            </div>
                                        </div>
                                    );
                                } else if (pageBodyBlocks.categoriesGalleryBlock) {
                                    return (
                                        <CategoriesCategoriesGalleryBlock
                                            key={`categoryGalleryBlock_${idx}`}
                                            content={pageBodyBlocks.categoriesGalleryBlock}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </section>
                    <FooterLayout />
                </main>
            </>
        );
    }
    return null;
}