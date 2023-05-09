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
                        className="object-cover object-center w-full rounded-xl"
                        src={defaultImage.image.src}
                        alt={defaultImage.image.alt}
                    />
                </div>
            </div>
        </section>
    );
}
