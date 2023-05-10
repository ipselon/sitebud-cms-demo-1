import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {ArticlePageContent, useAdaptedContent, useLastAuthor} from '@/adapters';
import Link from 'next/link';
import {AuthorProfileAuthorBylineLayout} from '@/components/AuthorProfilePage/AuthorProfileAuthorBylineLayout';

interface ArticleCardViewLayoutProps {
    content: ArticlePageContent;
}

export function ArticleCardLayout(props: ArticleCardViewLayoutProps) {
    const {siteContent} = useAdaptedContent();
    const {
        content: {
            tags,
            path,
            locale,
            dateUpdated,
            documentAreas: {
                card
            },
            authors,
        }
    } = props;

    const authorEmail: string = useLastAuthor(authors) || 'unknown';
    return (
        <div className="flex flex-col">
            {card.map((cardBlocks, idx) => {
                if (cardBlocks.cardImageBlock) {
                    const {cardViewImage: {image: {alt, src, focusX, focusY}}} = cardBlocks.cardImageBlock;
                    return (
                        <div key={`cardImageBlock_${idx}`}>
                            <img

                                className="object-cover w-full h-64 rounded-lg lg:h-80"
                                src={src}
                                alt={alt}
                                style={{
                                    objectPosition: `${focusX || 50}% ${focusY || 50}%`
                                }}
                            />
                        </div>
                    );
                } else if (cardBlocks.cardTitleBlock) {
                    const {cardTitle: {text}} = cardBlocks.cardTitleBlock
                    return (
                        <div key={`cardTitleBlock_${idx}`}>
                            <div className="custom-prose text-gray-800 mt-4" dangerouslySetInnerHTML={{__html: text}}/>
                        </div>
                    );
                } else if (cardBlocks.cardExcerptBlock) {
                    const {cardExcerpt: {text, readMoreLabel}} = cardBlocks.cardExcerptBlock;
                    return (
                        <React.Fragment key={`cardExcerptBlock_${idx}`}>
                            <div
                                className="custom-prose block mt-2 text-gray-500 flex-grow"
                                dangerouslySetInnerHTML={{__html: text}}
                            />
                            <Link
                                prefetch={false}
                                href={path}
                                locale={locale}
                                className="inline-block text-blue-500 underline hover:text-blue-400"
                            >
                                {readMoreLabel || 'Read More'}
                            </Link>
                        </React.Fragment>
                    );
                }
            })}
            <div className="flex mt-6 items-start justify-between">
                <div className="flex flex-row flex-wrap">
                    {Object.keys(tags).map((tagName, idx) => {
                        if (siteContent?.tagsLinks[tagName]) {
                            return (
                                <Link key={`${tagName}_${idx}`} locale={locale} href={siteContent?.tagsLinks[tagName]} prefetch={false}>
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
            <div className="flex flex-row items-start justify-between mt-6">
                <div>
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
                    <p className="w-32 text-right text-sm text-gray-500">
                        {dateUpdated
                            ? formatDistanceToNow(new Date(dateUpdated), {addSuffix: true})
                            : ''
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}