import React from 'react';
import {
    ArticlePage_PageBody_ArticleHeroBlock
} from '@/adapters';

interface ArticlePageHeroBlockProps {
    content: ArticlePage_PageBody_ArticleHeroBlock;
}

export function ArticleHeroBlock(props: ArticlePageHeroBlockProps) {
    const {content} = props;
    const {heroTitle, heroImage} = content;
    return (
        <section id="page-title" className="w-full pt-10 flex flex-col">
            <div className="container xl:px-56">
                    <div className="custom-prose text-gray-700">
                        <div dangerouslySetInnerHTML={{__html: heroTitle.text}} />
                    </div>
            </div>
            <div className="container">
                    <div className="flex justify-center mt-10">
                        <img
                            className="w-full h-80 rounded-xl"
                            src={heroImage.image.src}
                            alt={heroImage.image.alt}
                            style={{
                                objectFit: 'cover',
                                objectPosition: `${heroImage.image.focusX || 50}% ${heroImage.image.focusY || 50}%`
                            }}
                        />
                    </div>
            </div>
        </section>
    );
}
