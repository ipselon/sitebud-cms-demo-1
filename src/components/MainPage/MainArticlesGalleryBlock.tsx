import React from 'react';
import {MainPage_PageBody_ArticlesGalleryBlock, useAdaptedDataUtils} from '@/adapters';
import {CategoryCardLayout} from '@/components/CategoryPage/CategoryCardLayout';
import {ArticleCardLayout} from '@/components/ArticlePage/ArticleCardLayout';

interface MainPageArticlesGalleryBlockProps {
    content: MainPage_PageBody_ArticlesGalleryBlock;
}

export function MainArticlesGalleryBlock(props: MainPageArticlesGalleryBlockProps) {
    const {content: {
        galleryHeading,
        galleryListing: {
            documentsList
        }
    }} = props;
    const {getDocumentContentContextList} = useAdaptedDataUtils();
    return (
        <section className="w-full pb-10">
            <div className="container flex flex-col justify-start">
                <div className="custom-prose my-8 flex items-center justify-between text-gray-800">
                    <div dangerouslySetInnerHTML={{__html: galleryHeading.text}} />
                </div>
                <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
                    {getDocumentContentContextList(documentsList).map((documentContentContextItem, idx) => {
                        if (documentContentContextItem.categoryPageContent) {
                            return (
                                <CategoryCardLayout key={`categoryPageContent_${idx}`} content={documentContentContextItem.categoryPageContent} />
                            );
                        } else if (documentContentContextItem.articlePageContent) {
                            return (
                                <ArticleCardLayout key={`articlePageContent_${idx}`} content={documentContentContextItem.articlePageContent} />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}