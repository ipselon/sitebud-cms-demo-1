import {DocumentConfig} from '@sitebud/sdk-lib';
import {categoriesPageFields} from '../dataFields/categoriesPageFields';
import {defaultHeadingBlock} from '../blocks/defaultHeadingBlock';
import {categoriesGalleryBlock} from '../blocks/categoriesGalleryBlock';

export const CategoriesPage: DocumentConfig = {
    type: 'page',
    label: 'Categories',
    defaultTitle: 'Categories',
    description: 'A categories page organizes categories by topic or theme, making it easy for users to find and explore related content.',
    imageName: 'categories-document.webp',
    dataFields: categoriesPageFields,
    documentAreas: {
        pageBody: {
            indexNumber: 0,
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