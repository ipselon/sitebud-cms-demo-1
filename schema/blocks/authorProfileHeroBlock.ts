import {BlockConfig} from '@sitebud/sdk-lib';

export const authorProfileHeroBlock: BlockConfig = {
    label: 'Hero Block',
    description: 'The page\'s hero is a crucial element of your page design, as it captures the attention of your visitors and conveys the primary message of your content.',
    imageName: 'author_profile_hero_block.png',
    components: {
        authorName: {
            indexNumber: 0,
            label: 'Author Name',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Type the author name title...</h1>'
                    }
                }
            }
        },
        description: {
            indexNumber: 1,
            label: 'Description',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<p>Type the description...</p>'
                    }
                }
            }
        },
        authorPicture: {
            indexNumber: 2,
            label: 'Author Picture',
            props: {
                image: {
                    indexNumber: 0,
                    type: 'Image',
                    fieldContent: {}
                }
            }
        }
    }
};
