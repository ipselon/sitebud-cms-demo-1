import {DocumentConfig} from '@sitebud/sdk-lib';
import {defaultHeadingBlock} from '../blocks/defaultHeadingBlock';
import {tagArticlesGalleryBlock} from '../blocks/tagArticlesGalleryBlock';
import {cardImageBlock} from '../blocks/cardImageBlock';
import {cardTitleBlock} from '../blocks/cardTitleBlock';
import {cardExcerptBlock} from '../blocks/cardExcerptBlock';
import {basicSeoDataBlock} from '../blocks/basicSeoDataBlock';

export const TagPage: DocumentConfig = {
    type: 'page',
    label: 'Tag',
    defaultTitle: 'Tag',
    description: 'A webpage dedicated to a single tag displays a gallery of articles that share the same associated keyword or topic. By grouping articles under a specific tag, the webpage enhances user experience by simplifying navigation and helping visitors discover content relevant to their interests.',
    imageName: 'tag_document.png',
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
            helpText: 'The content on a tag page typically includes list of articles with associated tag.',
            imageName: '',
            blocks: {
                defaultHeadingBlock,
                tagArticlesGalleryBlock
            }
        },
        card: {
            indexNumber: 2,
            label: 'Card',
            helpText: 'A card on a webpage showcases a snapshot of page\'s content in a visually appealing, compact format. It typically includes an image, title, and brief description, making it easy for users to browse and select their desired destination.',
            blocks: {
                cardImageBlock,
                cardTitleBlock,
                cardExcerptBlock,
            }
        }
    }
}