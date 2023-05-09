import React from 'react';
import {
    TagsPage_PageBody_DefaultHeadingBlock
} from '@/adapters';

interface TagsHeadingBlockProps {
    content: TagsPage_PageBody_DefaultHeadingBlock;
}

export function TagsHeadingBlock(props: TagsHeadingBlockProps) {
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
