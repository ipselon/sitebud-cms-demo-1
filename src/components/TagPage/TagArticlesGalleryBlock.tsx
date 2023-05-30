import React from 'react';
import {
    TagPage_PageBody_TagArticlesGalleryBlock, useAdaptedDataUtils
} from '@/adapters';
import {ArticleCardLayout} from '@/components/ArticlePage/ArticleCardLayout';

interface TagArticlesGalleryBlockProps {
    content: TagPage_PageBody_TagArticlesGalleryBlock;
}

export function TagArticlesGalleryBlock(props: TagArticlesGalleryBlockProps) {
    const {content: {
        galleryListing: {
            documentList
        }
    }} = props;
    const {getDocumentContentContextList} = useAdaptedDataUtils();
    return (
        <section id="blog-posts-gallery" className="w-full">
            <div className="container flex flex-col justify-start">
                <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
                    {getDocumentContentContextList(documentList).map((documentContentItem, idx) => {
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