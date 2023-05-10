import React from 'react';
import {AuthorProfilePage_PageBody_AuthorProfileHeroBlock} from '@/adapters';

interface AuthorProfileHeroBlockProps {
    content: AuthorProfilePage_PageBody_AuthorProfileHeroBlock;
}

export function AuthorProfileHeroBlock(props: AuthorProfileHeroBlockProps) {
    const {content: {
        authorName,
        authorPicture,
        description,
    }} = props;

    return (
        <section className="w-full">
            <div className="container">
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col items-center pt-16">
                        <div className="custom-prose text-gray-700" dangerouslySetInnerHTML={{__html: authorName.text}} />
                        <div className="custom-prose text-gray-500 mt-2 mb-5" dangerouslySetInnerHTML={{__html: description.text}} />
                        <img
                            className="object-cover w-80 rounded-xl aspect-square"
                            src={authorPicture.image.src}
                            alt={authorPicture.image.alt}
                            style={{
                                objectPosition: `${authorPicture.image.focusX || 50}% ${authorPicture.image.focusY || 50}%`
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}