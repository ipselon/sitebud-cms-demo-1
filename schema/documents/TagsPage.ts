import {DocumentConfig} from '@sitebud/sdk-lib';
import {defaultHeadingBlock} from '../blocks/defaultHeadingBlock';
import {tagsGalleryBlock} from '../blocks/tagsGalleryBlock';
import {basicSeoDataBlock} from '../blocks/basicSeoDataBlock';

export const TagsPage: DocumentConfig = {
    type: 'page',
    label: 'Tags',
    defaultTitle: 'Tags',
    description: 'A tags page organizes tags, making it easy for users to find and explore related content.',
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
            helpText: 'The content on a tags page typically includes list of tags.',
            imageName: '',
            blocks: {
                defaultHeadingBlock,
                tagsGalleryBlock
            }
        }
    }
}