import {BlockConfig} from '@sitebud/sdk-lib';

const description: string = 'The Hero, featuring a captivating background image, is a critical component of your webpage design. It effectively captures your visitors\' attention and conveys the primary message of your content, creating an engaging visual experience.';

export const mainPageHeroBlock: BlockConfig = {
    label: 'Hero Block',
    description,
    imageName: 'default_hero_block.png',
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
        heroDescription: {
            indexNumber: 1,
            label: 'Hero Description',
            props: {
                text: {
                    indexNumber: 1,
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<h1>Type the hero description...</h1>'
                    }
                }
            }
        },
        heroBackgroundImage: {
            indexNumber: 2,
            label: 'Hero Background Image',
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
