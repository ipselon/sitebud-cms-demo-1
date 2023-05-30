import React from 'react';
import {CategoryPage_PageBody_ArticlesGalleryBlock, useAdaptedDataUtils} from '@/adapters';
import {ArticleCardLayout} from '@/components/ArticlePage/ArticleCardLayout';

interface CategoryArticlesGalleryBlockProps {
    content: CategoryPage_PageBody_ArticlesGalleryBlock;
}

export function CategoryArticlesGalleryBlock(props: CategoryArticlesGalleryBlockProps) {
    const {content: {
        galleryHeading: {
            text: galleryTitle
        },
        galleryListing: {
            documentsList,
        }
    }} = props;
    const {getDocumentContentContextList} = useAdaptedDataUtils();
    return (
        <section id="blog-posts-gallery" className="w-full">
            <div className="container flex flex-col justify-start">
                <div className="custom-prose my-8 flex items-center justify-between text-gray-800">
                    <div dangerouslySetInnerHTML={{__html: galleryTitle}} />
                </div>
                <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
                    {getDocumentContentContextList(documentsList).map((documentContentItem, idx) => {
                        if (documentContentItem.articlePageContent) {
                            return (
                                <ArticleCardLayout
                                    key={`articlePageContent_${idx}`}
                                    content={documentContentItem.articlePageContent}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}