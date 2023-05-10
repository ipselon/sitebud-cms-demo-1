import React from 'react';
import Link from 'next/link';
import {TagPageContent, useAdaptedContent} from '@/adapters';

interface TagCardViewLayoutProps {
    content: TagPageContent;
}

export function TagCardLayout(props: TagCardViewLayoutProps) {
    const {content} = props;
    const {title, locale, documentAreas, path} = content;
    const {card} = documentAreas;
    return (
        <Link href={path} locale={locale} className="outline-0" aria-label={title}>
            <div className="relative overflow-hidden rounded-lg">
                {card.map((cardBlocks, idx) => {
                    if (cardBlocks.cardImageBlock) {
                        const {cardViewImage: {image: {src, alt, focusX, focusY}}} = cardBlocks.cardImageBlock;
                        return (
                            <img
                                key={`cardImageBlock_${idx}`}
                                className="w-full object-cover h-80 transition-all duration-300 hover:scale-105"
                                src={src}
                                alt={alt}
                                style={{
                                    objectPosition: `${focusX || 50}% ${focusY || 50}%`
                                }}
                            />
                        );
                    } else if (cardBlocks.cardTitleBlock) {
                        const {cardTitle: {text}} = cardBlocks.cardTitleBlock;
                        return (
                            <div key={`categoryCardViewTitleBlock_${idx}`} className="absolute bottom-0 left-0 right-0 px-8 py-4 overflow-hidden bg-white/60">
                                <div className="custom-prose text-blue-500" dangerouslySetInnerHTML={{__html: text}} />
                            </div>
                        );
                    }
                })}
            </div>
        </Link>
    );
}
