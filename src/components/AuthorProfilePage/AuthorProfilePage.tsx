import React from 'react';
import {useAdaptedContent} from '@/adapters';
import {AuthorProfilePageHead} from '@/components/AuthorProfilePage/AuthorProfilePageHead';
import {MainMenuLayout} from '@/components/Site/MainMenu/MainMenuLayout';
import {FooterLayout} from '@/components/Site/Footer/FooterLayout';
import {AuthorProfileHeroBlock} from '@/components/AuthorProfilePage/AuthorProfileHeroBlock';
import {AuthorProfileSocialLinksBlock} from '@/components/AuthorProfilePage/AuthorProfileSocialLinksBlock';
import {AuthorProfileArticlesGalleryBlock} from '@/components/AuthorProfilePage/AuthorProfileArticlesGalleryBlock';
import {AuthorProfileHeadingBlock} from '@/components/AuthorProfilePage/AuthorProfileHeadingBlock';
import {AuthorProfileImageBlock} from '@/components/AuthorProfilePage/AuthorProfileImageBlock';
import {AuthorProfileParagraphBlock} from '@/components/AuthorProfilePage/AuthorProfileParagraphBlock';

export function AuthorProfilePage() {
    const contentContext = useAdaptedContent();
    if (contentContext?.authorProfilePageContent) {
        const {locale, documentAreas} = contentContext.authorProfilePageContent;
        const {pageBody} = documentAreas;
        return (
            <>
                <AuthorProfilePageHead />
                <main>
                    <MainMenuLayout />
                    {pageBody.map((pageBodyBlocks, idx) => {
                        if (pageBodyBlocks.authorProfileHeroBlock) {
                            return (
                                <AuthorProfileHeroBlock key={`authorProfileHeroBlock_${idx}`}
                                                        content={pageBodyBlocks.authorProfileHeroBlock}/>
                            );
                        } else if (pageBodyBlocks.authorProfileSocialLinksBlock) {
                            return (
                                <AuthorProfileSocialLinksBlock
                                    key={`authorProfileSocialLinksBlock_${idx}`}
                                   content={pageBodyBlocks.authorProfileSocialLinksBlock}
                                    locale={locale}
                                />
                            );
                        } else if (pageBodyBlocks.articlesGalleryBlock) {
                            return (
                                <AuthorProfileArticlesGalleryBlock key={`articlesGalleryBlock_${idx}`}
                                                                   content={pageBodyBlocks.articlesGalleryBlock}/>
                            );
                        } else if (pageBodyBlocks.defaultHeadingBlock) {
                            return (
                                <AuthorProfileHeadingBlock key={`defaultHeadingBlock_${idx}`}
                                                           content={pageBodyBlocks.defaultHeadingBlock}/>
                            );

                        } else if (pageBodyBlocks.defaultImageBlock) {
                            return (
                                <AuthorProfileImageBlock key={`defaultImageBlock_${idx}`}
                                                         content={pageBodyBlocks.defaultImageBlock}/>
                            );

                        } else if (pageBodyBlocks.defaultParagraphBlock) {
                            return (
                                <AuthorProfileParagraphBlock key={`defaultParagraphBlock_${idx}`}
                                                             content={pageBodyBlocks.defaultParagraphBlock}/>
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