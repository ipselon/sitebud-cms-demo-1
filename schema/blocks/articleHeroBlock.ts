import {BlockConfig} from '@sitebud/sdk-lib';

export const articleHeroBlock: BlockConfig = {
    label: 'Hero Block',
    description: 'The page\'s hero is a crucial element of your page design, as it captures the attention of your visitors and conveys the primary message of your content.',
    imageName: 'article_hero_block.png',
    components: {
        heroTitle: {
            indexNumber: 0,
            label: 'Hero Title',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Type the hero title...</h1>'
                    }
                }
            }
        },
        heroImage: {
            indexNumber: 1,
            label: 'Hero Image',
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
