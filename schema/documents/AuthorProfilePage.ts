import {DocumentConfig} from '@sitebud/sdk-lib';
import {defaultHeadingBlock} from '../blocks/defaultHeadingBlock';
import {defaultParagraphBlock} from '../blocks/defaultParagraphBlock';
import {defaultImageBlock} from '../blocks/defaultImageBlock';
import {authorProfileHeroBlock} from '../blocks/authorProfileHeroBlock';
import {articlesGalleryBlock} from '../blocks/articlesGalleryBlock';
import {authorProfileSocialLinksBlock} from '../blocks/authorProfileSocialLinksBlock';
import {authorProfileAvatarBlock} from '../blocks/authorProfileAvatarBlock';
import {authorProfileInfoBlock} from '../blocks/authorProfileInfoBlock';
import {basicSeoDataBlock} from '../blocks/basicSeoDataBlock';

export const AuthorProfilePage: DocumentConfig = {
    type: 'page',
    label: 'Author Profile',
    defaultTitle: 'Author Name',
    description: 'A page that showcases the personal and professional details of a content creator or writer. It typically includes the author\'s name, photo, biography, social media links, and a list of their published articles or posts.',
    imageName: 'author_profile_document.png',
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
            helpText: 'The author\'s page body is the central content area, containing the author\'s name, photo, biography, social media links, and a list of their published articles or posts.',
            imageName: '',
            blocks: {
                authorProfileHeroBlock,
                authorProfileSocialLinksBlock,
                articlesGalleryBlock,
                defaultHeadingBlock,
                defaultImageBlock,
                defaultParagraphBlock
            }
        },
        authorByline: {
            indexNumber: 2,
            label: 'Author Byline',
            helpText: 'A brief section that attributes the content to its creator by displaying the author\'s name. It often appears near the beginning or end of an article or post and may include a link to the author\'s profile. The byline acknowledges the writer\'s work and offers readers an opportunity to explore more about the author and their other contributions.',
            imageName: '',
            blocks: {
                authorProfileAvatarBlock,
                authorProfileInfoBlock
            }
        }
    }
}
