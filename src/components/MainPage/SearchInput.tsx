import React, {useState, useEffect} from 'react';
import {useSearchIndex, SearchIndexItem} from '@sitebud/bridge-lib';
import {useRouter} from 'next/router';

interface SearchInputProps {
    onSearch: (foundItems?: Array<SearchIndexItem>) => void;
}

export function SearchInput(props: SearchInputProps) {
    const {onSearch} = props;
    const {fetchAndSearchText} = useSearchIndex();
    const {locale} = useRouter();
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        if (searchText.length >= 3) {
            fetchAndSearchText(searchText)
                .then((fetchedResults) => {
                    const fetchedResultsFiltered = fetchedResults.filter(i => i.locale === locale);
                    onSearch(fetchedResultsFiltered);
                });
        } else {
            onSearch();
        }
    }, [searchText]);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value && value.length >= 3) {
            window.localStorage.setItem('mainPage_searchText', value);
        } else {
            window.localStorage.removeItem('mainPage_searchText');
        }
        setSearchText(value);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedSearchText: string | null = window.localStorage.getItem('mainPage_searchText');
            if (storedSearchText) {
                setSearchText(storedSearchText);
            }
        }
    }, []);

    return (
        <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
            </span>
            <input
                type="text"
                value={searchText}
                placeholder="Search"
                onChange={handleInputChange}
                className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div>
    );
}
