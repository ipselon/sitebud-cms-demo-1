import React from 'react';
import {AuthorProfilePageContent} from '@/adapters';
import Link from 'next/link';

interface AuthorProfileAuthorBylineLayoutProps {
    content?: AuthorProfilePageContent;
}

export function AuthorProfileAuthorBylineLayout(props: AuthorProfileAuthorBylineLayoutProps) {
    const {content} = props;
    if (content) {
        const {documentAreas: {authorByline}, path, locale} = content;
        return (
            <div className="flex items-center gap-x-2">
                {authorByline.map((authorBylineBlock, idx) => {
                    if (authorBylineBlock.authorProfileAvatarBlock) {
                        const {avatar} = authorBylineBlock.authorProfileAvatarBlock;
                        return (
                            <img
                                key={`authorProfileAvatarBlock_${idx}`}
                                className="object-cover w-8 h-8 rounded-full"
                                src={avatar.image.src}
                                alt={avatar.image.alt}
                                style={{
                                    objectPosition: `${avatar.image.focusX || 50}% ${avatar.image.focusY || 50}%`
                                }}
                            />
                        );
                    } else if (authorBylineBlock.authorProfileInfoBlock) {
                        const {info: {email, fullName}} = authorBylineBlock.authorProfileInfoBlock;
                        return (
                            <div key={`authorProfileInfoBlock_${idx}`} className="flex flex-col">
                                <Link href={path} locale={locale} prefetch={false}>
                                    <p className="text-sm font-normal text-gray-700 hover:text-blue-400 hover:underline">
                                        {fullName}
                                    </p>
                                </Link>
                                <p className="text-xs font-normal text-gray-700">
                                    {email}
                                </p>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
    return null;
}