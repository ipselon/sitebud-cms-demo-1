import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useAdaptedContent} from '@/adapters';
import {FooterMenuLinksBlock} from './FooterMenuLinksBlock';
import {FooterMenuDocumentsBlock} from './FooterMenuDocumentsBlock';

export function FooterLayout() {
    const {siteContent} = useAdaptedContent();
    const {locale} = useRouter();

    if (!siteContent) {
        return null;
    }

    const {dataFields, documentAreas} = siteContent;
    const {siteTitle, siteLogo} = dataFields;
    return (
        <section className="w-full mt-28 mb-12">
            <div className="container">
                <div className="flex flex-col items-center">
                    <Link href="/" locale={locale}>
                        <img className="w-auto h-10 rounded-full" src={siteLogo?.value} alt={ `Logo of ${siteTitle?.value}`} />
                    </Link>
                    <div className="custom-prose mt-3 flex flex-col justify-start">
                        {documentAreas.footer.map((footerContentItem, idx) => {
                            if (footerContentItem.paragraphBlock) {
                                const {paragraph} = footerContentItem.paragraphBlock;
                                return (
                                    <div key={`paragraphBlock_${idx}`} dangerouslySetInnerHTML={{__html: paragraph.text}} />
                                );
                            }
                        })}
                    </div>
                    <hr className="w-full my-8 border-gray-200 dark:border-gray-700"/>
                    <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between">
                        {documentAreas.footer.map((footerContentItem, idx) => {
                            if (footerContentItem.copyrightBlock) {
                                const {copyright: {text, year}} = footerContentItem.copyrightBlock;
                                return (
                                    <p key={`copyrightBlock_${idx}`} className="text-sm text-gray-500">© Copyright {year}. {text}</p>
                                );
                            }
                        })}
                        <div className="flex mt-3 -mx-2 sm:mt-0">
                            {documentAreas.footer.map((footerContentItem, idx) => {
                                if (footerContentItem.menuLinksBlock) {
                                    return (
                                        <FooterMenuLinksBlock
                                            key={`menuLinksBlock_${idx}`}
                                            content={footerContentItem.menuLinksBlock}
                                            locale={locale}
                                        />
                                    );
                                } else if (footerContentItem.menuDocumentsBlock) {
                                    return (
                                        <FooterMenuDocumentsBlock
                                            key={`menuDocumentsBlock${idx}`}
                                            content={footerContentItem.menuDocumentsBlock}
                                            locale={locale}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
