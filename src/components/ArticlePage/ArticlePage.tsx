import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {useAdaptedContent} from '@/adapters';
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
    const {articlePageContent, siteContent} = useAdaptedContent();
    if (articlePageContent) {
        const {dataFields, title, documentAreas, tags, locale, authors, dateUpdated, hasRestrictedAreas} = articlePageContent;
        const {pageBody} = documentAreas;
        const authorEmail: string = getLastAuthor(authors) || 'unknown';
        return (
            <>
                <ArticlePageHead title={title} dataFields={dataFields}/>
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
                            const {defaultImage: {image: {src, alt}}} = pageBodyBlocks.defaultImageBlock;
                            return (
                                <section key={`defaultImageBlock_${idx}`} className="w-full pt-8">
                                    <div className="container xl:px-64">
                                        <div className="w-full">
                                            <img
                                                className="object-cover object-center w-full rounded-xl"
                                                src={src}
                                                alt={alt}
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
                                        {siteContent?.authorProfiles[authorEmail]
                                            ? (
                                                <AuthorProfileAuthorBylineLayout
                                                    content={siteContent?.authorProfiles[authorEmail].authorProfilePageContent}
                                                />
                                            )
                                            : (
                                                <p className="text-lg font-medium text-gray-700">{authorEmail}</p>
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
                                    {Object.keys(tags).map((tagName, idx) => {
                                        if (siteContent?.tagsLinks[tagName]) {
                                            return (
                                                <Link key={`${tagName}_${idx}`} href={siteContent?.tagsLinks[tagName]} locale={locale} prefetch={false}>
                                                    <span
                                                        className="mr-3 px-3 py-1 text-[10px] text-blue-800 uppercase bg-blue-200 rounded-full">
                                                        {tagName}
                                                    </span>
                                                </Link>
                                            );
                                        }
                                        return (
                                            <span key={`${tagName}_${idx}`}
                                                  className="mr-3 px-3 py-1 text-[10px] text-blue-800 uppercase bg-blue-200 rounded-full">
                                                {tagName}
                                            </span>
                                        );
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