import React from 'react';
import {
    AuthorProfilePage_PageBody_DefaultImageBlock
} from '@/adapters';

interface AuthorProfileImageBlockProps {
    content: AuthorProfilePage_PageBody_DefaultImageBlock;
}

export function AuthorProfileImageBlock(props: AuthorProfileImageBlockProps) {
    const {content: {
        defaultImage
    }} = props;

    return (
        <section className="w-full pt-8">
            <div className="container">
                <div className="w-full">
                    <img
                        className="object-cover w-full rounded-xl"
                        src={defaultImage.image.src}
                        alt={defaultImage.image.alt}
                        style={{
                            objectPosition: `${defaultImage.image.focusX || 50}% ${defaultImage.image.focusY || 50}%`
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
