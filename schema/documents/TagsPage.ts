import {DocumentConfig} from '@sitebud/sdk-lib';
import {defaultHeadingBlock} from '../blocks/defaultHeadingBlock';
import {tagsPageFields} from '../dataFields/tagsPageFields';
import {tagsGalleryBlock} from '../blocks/tagsGalleryBlock';

export const TagsPage: DocumentConfig = {
    type: 'page',
    label: 'Tags',
    defaultTitle: 'Tags',
    description: 'A tags page organizes tags, making it easy for users to find and explore related content.',
    imageName: 'tags-document.webp',
    dataFields: tagsPageFields,
    documentAreas: {
        pageBody: {
            indexNumber: 0,
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