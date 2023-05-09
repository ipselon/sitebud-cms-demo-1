import React from 'react';
import {useRouter} from 'next/router';
import {Menu} from '@headlessui/react';
import Cookie from 'js-cookie';
import Link from 'next/link';

const createCountryCode = (locale: string): string => {
    const localeParts: Array<string> = locale.split('-');
    if (localeParts.length > 1) {
        return localeParts[1].toUpperCase();
    }
    return '';
};

export function MainMenuLocaleSwitcher() {
    const { locale, locales } = useRouter();
    const currentLocale = Cookie.get('NEXT_LOCALE') || locale;

    const handleLocaleChange = (locale: string) => (e: React.MouseEvent) => {
        Cookie.set('NEXT_LOCALE', locale);
        // router.push(router.asPath, router.asPath, { locale });
    }

    if (locales) {
        const menuItems: Array<JSX.Element> = [];
        for (const localeItem of locales) {
            menuItems.push(
                <Menu.Item key={`localeItem_${localeItem}`}>
                    {() => (
                        <Link
                            href="/"
                            className="flex items-center mx-2 text-gray-700 transition-colors duration-300 transform rounded-md hover:bg-gray-100"
                            locale={localeItem}
                            onClick={handleLocaleChange(localeItem)}
                        >
                            <div className="py-1 px-2 overflow-hidden">
                                <span>{createCountryCode(localeItem)}</span>
                            </div>
                        </Link>
                    )}
                </Menu.Item>
            );
        }
        return (
            <div className="relative inline-block">
                <Menu>
                    <Menu.Button className="relative z-10 block p-1">
                        <div className="rounded border-[1px] border-gray-300 px-1 overflow-hidden">
                            {currentLocale && <span>{createCountryCode(currentLocale)}</span>}
                        </div>
                    </Menu.Button>
                    <Menu.Items
                        className="absolute right-0 z-20 py-2 mt-2 origin-top-right bg-white border-gray-300 border-[1px] rounded-md shadow-xl">
                        {menuItems}
                    </Menu.Items>
                </Menu>
            </div>
        );
    }
    return null;
}