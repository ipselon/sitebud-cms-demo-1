import {DocumentConfig} from '@sitebud/sdk-lib';
import {defaultHeadingBlock} from '../blocks/defaultHeadingBlock';
import {defaultParagraphBlock} from '../blocks/defaultParagraphBlock';
import {defaultImageBlock} from '../blocks/defaultImageBlock';
import {cardExcerptBlock} from '../blocks/cardExcerptBlock';
import {cardImageBlock} from '../blocks/cardImageBlock';
import {articleHeroBlock} from '../blocks/articleHeroBlock';
import {cardTitleBlock} from '../blocks/cardTitleBlock';
import {codeBlock} from '../blocks/codeBlock';
import {basicSeoDataBlock} from '../blocks/basicSeoDataBlock';
import {authorsBylinesBlock} from '../blocks/authorsBylinesBlock';
import {tagsListBlock} from '../blocks/tagsListBlock';

export const ArticlePage: DocumentConfig = {
    type: 'page',
    label: 'Article',
    defaultTitle: 'Article',
    description: 'A page where individual article resides, rich with engaging content, images, and videos. It\'s a creative hub for sharing insights, ideas, and stories, inviting readers to interact, learn, and be inspired while exploring the author\'s thoughts.',
    imageName: 'article_document.png',
    documentAreas: {
        metaData: {
            indexNumber: 0,
            label: 'Meta Data',
            helpText: '',
            blocks: {
                basicSeoDataBlock,
                authorsBylinesBlock,
                tagsListBlock
            }
        },
        pageBody: {
            indexNumber: 1,
            label: 'Page Body',
            helpText: 'The webpage body in an article is the central content area, containing the article\'s text, images, and multimedia elements. It\'s designed to captivate readers, providing valuable insights and ideas while encouraging interaction and fostering engagement.',
            imageName: 'article_page_body.png',
            blocks: {
                articleHeroBlock,
                defaultHeadingBlock,
                defaultParagraphBlock,
                defaultImageBlock,
                codeBlock
            }
        },
        card: {
            indexNumber: 2,
            label: 'Card',
            helpText: 'A card on a webpage showcases a snapshot of page\'s content in a visually appealing, compact format. It typically includes an image, title, and brief description, making it easy for users to browse and select their desired destination.',
            imageName: 'article_card.png',
            blocks: {
                cardImageBlock,
                cardTitleBlock,
                cardExcerptBlock
            }
        }
    }
}