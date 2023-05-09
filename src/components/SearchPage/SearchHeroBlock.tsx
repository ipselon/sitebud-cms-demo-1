import React, {useState} from 'react';
import Link from 'next/link';
import {SearchIndexItem} from '@sitebud/bridge-lib';
import {
    SearchPage_PageBody_SearchHeroBlock
} from '@/adapters';
import {SearchInput} from './SearchInput';

interface SearchHeroBlockProps {
    content: SearchPage_PageBody_SearchHeroBlock;
}

export function SearchHeroBlock(props: SearchHeroBlockProps) {
    const {content} = props;
    const {searchResultsListTitle, searchResultsEmptyListMessage} = content;
    const [foundItems, setFoundItems] = useState<Array<SearchIndexItem> | undefined>();
    return (
        <>
            <section className="w-full pb-5 pt-10">
                <div className="container flex flex-col justify-start items-center">
                    <div className="custom-prose container flex flex-col justify-start text-white">
                        <div className="w-full flex justify-center">
                            <SearchInput onSearch={(foundItems) => setFoundItems(foundItems)} />
                        </div>
                    </div>
                </div>
            </section>
        {foundItems && (
            <section className="w-full pb-5 pt-5">
                <div className="container flex flex-col justify-start items-center">
                    <div className="custom-prose" dangerouslySetInnerHTML={{__html: searchResultsListTitle.text}} />
                    {foundItems.length > 0
                        ? foundItems.map((foundItem, idx) => {
                        return (
                            <div key={idx} className="w-full py-3">
                                <div
                                    className="flex w-full overflow-hidden bg-white rounded-lg shadow-md border-gray-200 border-[1px] box-border"
                                >
                                    <div id="info" className="w-[4px] min-w-[4px] bg-blue-400">&nbsp;</div>
                                    <div className="px-4 py-2">
                                        <div className="mx-3 flex flex-col">
                                            <Link href={`/${foundItem.keyPath}`} locale={foundItem.locale} prefetch={false}>
                                                <span className="font-semibold text-blue-500 underline">{foundItem.title}</span>
                                            </Link>
                                            <p className="text-sm text-gray-500 line-clamp-3">
                                                {foundItem.chunks[0]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        })
                        : (
                            <div className="w-full py-3 flex justify-center">
                                <div className="custom-prose" dangerouslySetInnerHTML={{__html: searchResultsEmptyListMessage.text}} />
                            </div>
                        )
                    }
                </div>
            </section>
        )}
        </>
    );
}
