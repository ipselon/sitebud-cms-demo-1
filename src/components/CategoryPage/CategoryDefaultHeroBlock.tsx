import React from 'react';
import {CategoryPage_PageBody_DefaultHeroBlock} from '@/adapters';

interface CategoryPageDefaultHeroBlockProps {
    content: CategoryPage_PageBody_DefaultHeroBlock;
}

export function CategoryDefaultHeroBlock(props: CategoryPageDefaultHeroBlockProps) {
    const {content} = props;
    const {heroTitle, heroImage, heroDescription} = content;
    return (
        <section id="defaultHeroBlock" className="w-full pt-10">
            <div className="container">
                <div className="w-full grid md:grid-cols-2 gap-8">
                    <div className="w-full h-full flex flex-col justify-start custom-prose">
                        <div className="mb-5" dangerouslySetInnerHTML={{__html: heroTitle.text}} />
                        <div dangerouslySetInnerHTML={{__html: heroDescription.text}} />
                    </div>
                    <div className="flex items-center justify-center w-full h-96">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md"
                             src={heroImage.image.src}
                             alt={heroImage.image.alt}
                             style={{
                                 objectPosition: `${heroImage.image.focusX || 50}% ${heroImage.image.focusY || 50}%`
                             }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
