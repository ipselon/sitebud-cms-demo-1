import {DocumentConfig} from '@sitebud/sdk-lib';
import {mainPageHeroBlock} from '../blocks/mainPageHeroBlock';
import {categoryGalleryBlock} from '../blocks/categoryGalleryBlock';
import {articlesGalleryBlock} from '../blocks/articlesGalleryBlock';
import {basicSeoDataBlock} from '../blocks/basicSeoDataBlock';

export const MainPage: DocumentConfig = {
    type: 'main_page',
    label: 'Main Page',
    defaultTitle: 'Home',
    defaultSlug: 'home',
    description: 'The main page, often called the "homepage," is the entry point and central hub of a website. It provides an overview of the site\'s purpose, features key content and sections, and offers intuitive navigation.',
    imageName: '',
    documentAreas: {
        metaData: {
            indexNumber: 0,
            label: 'Meta Data',
            helpText: '',
            blocks: {
                basicSeoDataBlock,
            }
        },
        pageBody: {
            indexNumber: 1,
            label: 'Page Body',
            helpText: 'The part of a web page where the main content is displayed. It\'s like the canvas for a painting, containing text, images, videos, and other elements that make up the visible portion of a website.',
            imageName: '',
            blocks: {
                mainPageHeroBlock,
                categoryGalleryBlock,
                articlesGalleryBlock
            }
        }
    }
};
