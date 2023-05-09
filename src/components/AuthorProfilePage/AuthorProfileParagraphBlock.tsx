import React from 'react';
import {
    AuthorProfilePage_PageBody_DefaultParagraphBlock
} from '@/adapters';

interface AuthorProfileParagraphBlockProps {
    content: AuthorProfilePage_PageBody_DefaultParagraphBlock;
}

export function AuthorProfileParagraphBlock(props: AuthorProfileParagraphBlockProps) {
    const {content: {
        defaultParagraph
    }} = props;

    return (
        <section className="w-full">
            <div className="container">
                <div className="custom-prose text-gray-800 py-8">
                    <div dangerouslySetInnerHTML={{__html: defaultParagraph.text}} />
                </div>
            </div>
        </section>
    );
}
