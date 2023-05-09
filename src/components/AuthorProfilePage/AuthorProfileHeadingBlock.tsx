import React from 'react';
import {
    AuthorProfilePage_PageBody_DefaultHeadingBlock
} from '@/adapters';

interface AuthorProfileHeadingBlockProps {
    content: AuthorProfilePage_PageBody_DefaultHeadingBlock;
}

export function AuthorProfileHeadingBlock(props: AuthorProfileHeadingBlockProps) {
    const {content: {
        defaultHeading
    }} = props;

    return (
        <section className="w-full">
            <div className="container">
                <div className="custom-prose text-gray-800 py-8">
                    <div dangerouslySetInnerHTML={{__html: defaultHeading.text}} />
                </div>
            </div>
        </section>
    );
}
