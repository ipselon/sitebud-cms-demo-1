import {DocumentConfig} from '@sitebud/sdk-lib';
import {defaultHeroBlock} from '../blocks/defaultHeroBlock';
import {cardImageBlock} from '../blocks/cardImageBlock';
import {articlesGalleryBlock} from '../blocks/articlesGalleryBlock';
import {cardTitleBlock} from '../blocks/cardTitleBlock';
import {basicSeoDataBlock} from '../blocks/basicSeoDataBlock';

export const CategoryPage: DocumentConfig = {
    type: 'page',
    label: 'Category',
    defaultTitle: 'Category',
    description: 'A category page organizes articles by topic or theme, making it easy for users to find and explore related content.',
    imageName: 'category_document.png',
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
            helpText: 'The content on a category page typically includes category hero and list of articles.',
            imageName: '',
            blocks: {
                defaultHeroBlock,
                articlesGalleryBlock
            }
        },
        card: {
            indexNumber: 2,
            label: 'Card',
            helpText: 'A card on a webpage showcases a snapshot of page\'s content in a visually appealing, compact format. It typically includes an image, title, and brief description, making it easy for users to browse and select their desired destination.',
            imageName: '',
            blocks: {
                cardImageBlock,
                cardTitleBlock
            }
        }
    }
}