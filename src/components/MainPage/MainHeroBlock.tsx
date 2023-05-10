import React, {useState} from 'react';
import {SearchIndexItem} from '@sitebud/bridge-lib';
import {MainPage_PageBody_MainPageHeroBlock} from '@/adapters';
import {SearchInput} from '@/components/MainPage/SearchInput';
import Link from 'next/link';

interface MainHeroBlockProps {
    content: MainPage_PageBody_MainPageHeroBlock;
}

export function MainHeroBlock(props: MainHeroBlockProps) {
    const {content} = props;
    const {heroTitle, heroDescription, heroBackgroundImage} = content;
    const [foundItems, setFoundItems] = useState<Array<SearchIndexItem> | undefined>();
    return (
        <>
        <section
            id="mainPageHeroBlock"
            className="w-full relative"
        >
            <div
                className="w-full absolute inset-0 bg-center bg-cover bg-no-repeat h-full -z-10"
                style={{
                    backgroundImage: `url("${heroBackgroundImage.image.src}")`,
                    backgroundPosition: `${heroBackgroundImage.image.focusX || 50}% ${heroBackgroundImage.image.focusY || 50}%`
                }}
            >
                <div className="w-full h-full opacity-[0.5] bg-gradient-to-b from-blue-900 to-transparent"/>
            </div>
            <div className="custom-prose container flex flex-col justify-start pt-32 pb-32 text-white">
                <div className="mb-5" dangerouslySetInnerHTML={{__html: heroTitle.text}} />
                <div dangerouslySetInnerHTML={{__html: heroDescription.text}} />
                <div className="w-full flex justify-center mt-10">
                    <SearchInput onSearch={(foundItems) => setFoundItems(foundItems)} />
                </div>
            </div>
        </section>
        {foundItems && (
            <section className="w-full pb-5 pt-5">
                <div className="container flex flex-col justify-start items-center">
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
                            <div className="w-full py-3">
                                <div
                                    className="flex w-full overflow-hidden bg-white rounded-lg shadow-md border-gray-200 border-[1px] box-border"
                                >
                                    <div id="info" className="w-[4px] min-w-[4px] bg-amber-400">&nbsp;</div>
                                    <div className="px-4 py-2">
                                        <div className="mx-3">
                                            <span className="font-semibold text-amber-500">Nothing Found</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        )}
        </>
    );
}
