import {DocumentConfig} from '@sitebud/sdk-lib';
import {menuLinksBlock} from '../blocks/menuLinksBlock';
import {copyrightBlock} from '../blocks/copyrightBlock';
import {paragraphBlock} from '../blocks/paragraphBlock';
import {menuDocumentsBlock} from '../blocks/menuDocumentsBlock';
import {menuLogoBlock} from '../blocks/menuLogoBlock';

export const Site: DocumentConfig = {
    type: 'site',
    label: 'Site',
    description: 'Global site content refers to elements consistently applied to each page on a website, ensuring a cohesive browsing experience. This may include headers, footers, navigation menus, logos, and contact information, which provide uniformity and easy access to essential resources.',
    documentAreas: {
        metaData: {
            indexNumber: 0,
            label: 'Meta Data',
            blocks: {
                menuLogoBlock
            }
        },
        mainMenu: {
            indexNumber: 1,
            label: 'Main Menu',
            helpText: 'Main menu is a structured menu of hyperlinks connecting key pages, ensuring swift access to essential content. It simplifies browsing by providing a clear path to various sections, enabling users to efficiently explore and locate desired information.',
            imageName: '',
            blocks: {
                menuLinksBlock,
                menuDocumentsBlock
            }
        },
        footer: {
            indexNumber: 2,
            label: 'Footer',
            helpText: 'A website footer is the lower section of a web page that typically contains supplementary information such as copyright notices, contact details, privacy policy, terms of service, social media links, and site navigation options. It serves as a consistent element across all pages, providing easy access to important information and enhancing user experience.',
            imageName: '',
            blocks: {
                menuLinksBlock,
                menuDocumentsBlock,
                copyrightBlock,
                paragraphBlock,
            }
        }
    }
};
