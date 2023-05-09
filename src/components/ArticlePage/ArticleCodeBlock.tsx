import React, {useEffect} from 'react';
import {ArticlePage_PageBody_CodeBlock} from '@/adapters';

interface ArticleCodeBlockProps {
    content: ArticlePage_PageBody_CodeBlock;
}

export function ArticleCodeBlock(props: ArticleCodeBlockProps) {
    const {content} = props;
    const {paragraph: {language, text}} = content;

    useEffect(() => {
        document.querySelectorAll('pre.sb-code-block code').forEach((block) => {
            block.className = language;
            (window as any).hljs.highlightElement(block);
        });
    }, [language]);

    return (
        <section className="w-full pt-8">
            <div className="container xl:px-64">
                <div className="w-full custom-prose rounded overflow-hidden">
                    <div dangerouslySetInnerHTML={{__html: text}}/>
                </div>
            </div>
        </section>
    );
}