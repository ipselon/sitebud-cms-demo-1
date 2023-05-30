import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {ArticlePageContent, DocumentContentContext, useAdaptedDataUtils} from '@/adapters';
import {AuthorProfileAuthorBylineLayout} from '@/components/AuthorProfilePage/AuthorProfileAuthorBylineLayout';
import {useRouter} from 'next/router';

interface ArticleCardViewLayoutProps {
    content: ArticlePageContent;
}

export function ArticleCardLayout(props: ArticleCardViewLayoutProps) {
    const {
        content: {
            path,
            dateUpdated,
            documentAreas: {
                card,
                metaData
            }
        }
    } = props;
    const {locale} = useRouter();
    const {getDocumentContentContextList} = useAdaptedDataUtils();
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
                            <Link href={path} locale={locale} prefetch={false}>
                                <div className="custom-prose text-gray-800 mt-4" dangerouslySetInnerHTML={{__html: text}}/>
                            </Link>
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
                    {tagDocumentContentContexts?.map((tagDocumentContentContextItem, idx) => {
                        if (tagDocumentContentContextItem.tagPageContent) {
                            const {title, path, slug} = tagDocumentContentContextItem.tagPageContent;
                            return (
                                <Link key={`${slug}_${idx}`} locale={locale} href={path} prefetch={false}>
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
            <div className="flex flex-row items-start justify-between mt-6">
                <div>
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