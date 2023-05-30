import React from 'react';
import {useAdaptedContent} from '@/adapters';
import {MainMenuLayout} from '@/components/Site/MainMenu/MainMenuLayout';
import {FooterLayout} from '@/components/Site/Footer/FooterLayout';
import {SearchPageHead} from './SearchPageHead';
import {SearchHeroBlock} from './SearchHeroBlock';

export function SearchPage() {
    const contentContext = useAdaptedContent();
    if (contentContext?.searchPageContent) {
        const {documentAreas} = contentContext.searchPageContent;
        const {pageBody} = documentAreas;
        return (
            <>
                <SearchPageHead />
                <main>
                    <MainMenuLayout/>
                    {pageBody.map((pageBodyBlocks, idx) => {
                        if (pageBodyBlocks.searchHeroBlock) {
                            return (
                                <SearchHeroBlock key={`searchHeroBlock_${idx}`} content={pageBodyBlocks.searchHeroBlock} />
                            );
                        }
                    })}
                    <FooterLayout/>
                </main>
            </>
        );
    }
    return null;
}