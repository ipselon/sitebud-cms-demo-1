import React from 'react';
import Link from 'next/link';
import {MainPage_PageBody_CategoryGalleryBlock, useAdaptedDataUtils} from '@/adapters';
import {CategoryCardLayout} from '@/components/CategoryPage/CategoryCardLayout';

interface MainPageCategoryGalleryBlockProps {
    locale?: string;
    content: MainPage_PageBody_CategoryGalleryBlock;
}

export function MainCategoryGalleryBlock(props: MainPageCategoryGalleryBlockProps) {
    const {
        content: {
            galleryHeading,
            fullGalleryLink,
            galleryListing: {
                documentsList
            }
        },
        locale
    } = props;
    const {getDocumentContentContextList} = useAdaptedDataUtils();
    return (
        <section className="w-full pb-10">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex-grow custom-prose text-gray-800 py-8">
                        <div dangerouslySetInnerHTML={{__html: galleryHeading.text}}/>
                    </div>
                    <div>
                        {getDocumentContentContextList(fullGalleryLink.link).map((documentContentContextItem, idx) => {
                            if (documentContentContextItem.categoriesPageContent) {
                                const {path, title} = documentContentContextItem.categoriesPageContent;
                                return (
                                    <Link
                                        key={`categoriesPageContent_${idx}`}
                                        href={path}
                                        locale={locale}
                                        className="capitalize text-blue-500 underline hover:text-blue-400"
                                        prefetch={false}
                                    >
                                        {title}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
                    {getDocumentContentContextList(documentsList).map((documentContentContextItem, idx) => {
                        if (documentContentContextItem.categoryPageContent) {
                            return (
                                <CategoryCardLayout key={`categoryPageContent_${idx}`}
                                                    content={documentContentContextItem.categoryPageContent}/>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}
