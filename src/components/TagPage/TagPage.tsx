import React from 'react';
import {useAdaptedContent} from '@/adapters';
import {MainMenuLayout} from '@/components/Site/MainMenu/MainMenuLayout';
import {FooterLayout} from '@/components/Site/Footer/FooterLayout';
import {TagPageHead} from './TagPageHead';
import {TagHeadingBlock} from './TagHeadingBlock';
import {TagArticlesGalleryBlock} from './TagArticlesGalleryBlock';

export function TagPage() {
    const contentContext = useAdaptedContent();
    if (contentContext?.tagPageContent) {
        const {documentAreas} = contentContext.tagPageContent;
        const {pageBody} = documentAreas;
        return (
            <>
                <TagPageHead />
                <main>
                    <MainMenuLayout/>
                    {pageBody.map((pageBodyBlocks, idx) => {
                        if (pageBodyBlocks.defaultHeadingBlock) {
                            return (
                                <TagHeadingBlock
                                    key={`defaultHeadingBlock${idx}`}
                                    content={pageBodyBlocks.defaultHeadingBlock}
                                />
                            );
                        } else if (pageBodyBlocks.tagArticlesGalleryBlock) {
                            return (
                                <TagArticlesGalleryBlock
                                    key={`tagArticlesGalleryBlock_${idx}`}
                                    content={pageBodyBlocks.tagArticlesGalleryBlock}
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