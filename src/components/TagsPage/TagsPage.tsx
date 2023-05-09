import React from 'react';
import {useAdaptedContent} from '@/adapters';
import {MainMenuLayout} from '@/components/Site/MainMenu/MainMenuLayout';
import {FooterLayout} from '@/components/Site/Footer/FooterLayout';
import {TagsPageHead} from './TagsPageHead';
import {TagsHeadingBlock} from './TagsHeadingBlock';
import {TagsGalleryBlock} from './TagsGalleryBlock';

export function TagsPage() {
    const {tagsPageContent} = useAdaptedContent();
    if (tagsPageContent) {
        const {dataFields, title, documentAreas} = tagsPageContent;
        const {pageBody} = documentAreas;
        return (
            <>
                <TagsPageHead title={title} dataFields={dataFields}/>
                <main>
                    <MainMenuLayout/>
                    {pageBody.map((pageBodyBlocks, idx) => {
                        if (pageBodyBlocks.defaultHeadingBlock) {
                            return (
                                <TagsHeadingBlock
                                    key={`defaultHeadingBlock${idx}`}
                                    content={pageBodyBlocks.defaultHeadingBlock}
                                />
                            );
                        } else if (pageBodyBlocks.tagsGalleryBlock) {
                            return (
                                <TagsGalleryBlock
                                    key={`tagsGalleryBlock_${idx}`}
                                    content={pageBodyBlocks.tagsGalleryBlock}
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