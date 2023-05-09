import React from 'react';
import {
    TagPage_PageBody_DefaultHeadingBlock
} from '@/adapters';

interface TagHeadingBlockProps {
    content: TagPage_PageBody_DefaultHeadingBlock;
}

export function TagHeadingBlock(props: TagHeadingBlockProps) {
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
