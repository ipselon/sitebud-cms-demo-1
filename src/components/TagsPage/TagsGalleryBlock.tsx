import React from 'react';
import {
    TagsPage_PageBody_TagsGalleryBlock, DocumentContentContext, useAdaptedDataUtils
} from '@/adapters';
import {TagCardLayout} from '@/components/TagPage/TagCardLayout';

interface TagsGalleryBlockProps {
    content: TagsPage_PageBody_TagsGalleryBlock;
}

export function TagsGalleryBlock(props: TagsGalleryBlockProps) {
    const {content: {
        galleryListing: {
            documentsList
        }
    }} = props;
    const {getDocumentContentContextList} = useAdaptedDataUtils();
    return (
        <section id="blog-posts-gallery" className="w-full">
            <div className="container flex flex-col justify-start">
                <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
                    {getDocumentContentContextList(documentsList).map((documentContentItem, idx) => {
                        if (documentContentItem.tagPageContent) {
                            return (
                                <TagCardLayout
                                    key={`tagPageContent_${idx}`}
                                    content={documentContentItem.tagPageContent}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}
