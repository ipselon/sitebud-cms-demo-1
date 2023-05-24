import {DocumentConfig} from '@sitebud/sdk-lib';
import {defaultHeadingBlock} from '../blocks/defaultHeadingBlock';
import {categoriesGalleryBlock} from '../blocks/categoriesGalleryBlock';
import {basicSeoDataBlock} from '../blocks/basicSeoDataBlock';

export const CategoriesPage: DocumentConfig = {
    type: 'page',
    label: 'Categories',
    defaultTitle: 'Categories',
    description: 'A categories page organizes categories by topic or theme, making it easy for users to find and explore related content.',
    imageName: 'categories_document.png',
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
            helpText: 'The content on a categories page typically includes list of categories.',
            imageName: '',
            blocks: {
                defaultHeadingBlock,
                categoriesGalleryBlock
            }
        }
    }
}