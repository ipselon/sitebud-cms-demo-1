import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {useAdaptedContent, DocumentContentContext, useAdaptedDataUtils} from '@/adapters';
import {ArticlePageHead} from '@/components/ArticlePage/ArticlePageHead';
import {ArticleHeroBlock} from '@/components/ArticlePage/ArticleHeroBlock';
import {MainMenuLayout} from '@/components/Site/MainMenu/MainMenuLayout';
import {FooterLayout} from '@/components/Site/Footer/FooterLayout';
import {AuthorProfileAuthorBylineLayout} from '@/components/AuthorProfilePage/AuthorProfileAuthorBylineLayout';
import {ArticleCodeBlock} from '@/components/ArticlePage/ArticleCodeBlock';

function getLastAuthor(
    authors?: Record<string, number>
): string | undefined {
    let authorEmail: string | undefined;
    if (authors) {
        let authorEntries: Array<[string, number]> = Object.entries(authors);
        if (authorEntries.length > 0) {
            authorEntries = authorEntries.sort((a, b) => b[1] - a[1]);
            authorEmail = authorEntries[0][0];
        }
    }
    return authorEmail;
}


export function ArticlePage() {
    const contentContext = useAdaptedContent();
    const {getDocumentContentContextList} = useAdaptedDataUtils();
    if (contentContext?.articlePageContent) {
        const {documentAreas, authors, dateUpdated, locale} = contentContext.articlePageContent;
        const {pageBody, metaData} = documentAreas;

        let authorDocumentContent: DocumentContentContext | undefined = undefined;
        let tagDocumentContentContexts: Array<DocumentContentContext> | undefined = undefined;
        if (metaData && metaData.length > 0) {
            for (const metaDataItem of metaData) {
                const {authorsBylinesBlock, tagsListBlock} = metaDataItem;
                if (authorsBylinesBlock) {
                    authorDocumentContent = getDocumentContentContextList(authorsBylinesBlock.authorsBylines.documentsList)[0];
                }
                if (tagsListBlock) {
                    tagDocumentContentContexts = getDocumentContentContextList(tagsListBlock.tags.documentsList);
                }
            }
        }
        return (
            <>
                <ArticlePageHead />
                <main>
                    <MainMenuLayout />
                    {pageBody.map((pageBodyBlocks, idx) => {
                        if (pageBodyBlocks.defaultHeadingBlock) {
                            const {defaultHeading: {text}} = pageBodyBlocks.defaultHeadingBlock;
                            return (
                                <section key={`defaultHeadingBlock_${idx}`} className="w-full pt-8">
                                    <div className="container xl:px-64">
                                        <div className="w-full custom-prose text-gray-700">
                                            <div dangerouslySetInnerHTML={{__html: text}}/>
                                        </div>
                                    </div>
                                </section>
                            );
                        } else if (pageBodyBlocks.articleHeroBlock) {
                            return (
                                <ArticleHeroBlock
                                    key={`articleHeroBlock_${idx}`}
                                    content={pageBodyBlocks.articleHeroBlock}
                                />
                            );
                        } else if (pageBodyBlocks.defaultParagraphBlock) {
                            const {defaultParagraph: {text}} = pageBodyBlocks.defaultParagraphBlock;
                            return (
                                <section key={`defaultParagraphBlock_${idx}`} className="w-full pt-8">
                                    <div className="container xl:px-64">
                                        <div className="w-full custom-prose text-gray-700">
                                            <div dangerouslySetInnerHTML={{__html: text}}/>
                                        </div>
                                    </div>
                                </section>
                            );
                        } else if (pageBodyBlocks.defaultImageBlock) {
                            const {defaultImage: {image: {src, alt, focusX, focusY}}} = pageBodyBlocks.defaultImageBlock;
                            return (
                                <section key={`defaultImageBlock_${idx}`} className="w-full pt-8">
                                    <div className="container xl:px-64">
                                        <div className="w-full">
                                            <img
                                                className="object-cover w-full rounded-xl"
                                                src={src}
                                                alt={alt}
                                                style={{
                                                    objectPosition: `${focusX || 50}% ${focusY || 50}%`
                                                }}
                                            />
                                        </div>
                                    </div>
                                </section>
                            );
                        } else if (pageBodyBlocks.codeBlock) {
                            return (
                                <ArticleCodeBlock key={`codeBlock_${idx}`} content={pageBodyBlocks.codeBlock} />
                            );
                        }
                    })}
                    <section className="w-full pt-8">
                        <div className="container xl:px-64 flex flex-col">
                            <hr className="my-6 border-gray-200" />
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col items-start">
                                    <div className="mb-4">
                                        {authorDocumentContent?.authorProfilePageContent
                                            ? (
                                                <AuthorProfileAuthorBylineLayout
                                                    content={authorDocumentContent?.authorProfilePageContent}
                                                />
                                            )
                                            : (
                                                <p className="text-lg font-medium text-gray-700">[MISSING AUTHOR]</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {dateUpdated
                                                ? formatDistanceToNow(new Date(dateUpdated), {addSuffix: true})
                                                : ''
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap">
                                    {tagDocumentContentContexts?.map((tagDocumentContentContextItem, idx) => {
                                        if (tagDocumentContentContextItem.tagPageContent) {
                                            const {title, path, slug} = tagDocumentContentContextItem.tagPageContent;
                                            return (
                                                <Link key={`${slug}_${idx}`} href={path} locale={locale} prefetch={false}>
                                                    <span
                                                        className="mr-3 px-3 py-1 text-[10px] text-blue-800 uppercase bg-blue-200 rounded-full">
                                                        {title}
                                                    </span>
                                                </Link>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterLayout />
                </main>
            </>
        );
    }
    return null;
}