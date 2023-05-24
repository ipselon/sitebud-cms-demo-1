import {BlockConfig} from '@sitebud/sdk-lib';

export const cardExcerptBlock: BlockConfig = {
    label: 'Card Excerpt Block',
    description: 'A card excerpt is a brief, informative description accompanying the title on a compact preview of a webpage\'s content.',
    imageName: 'card_excerpt_block.png',
    components: {
        cardExcerpt: {
            indexNumber: 0,
            label: 'Card Excerpt',
            helpText: 'A card excerpt is a brief, informative description accompanying the title on a compact preview of a webpage\'s content.',
            imageName: '',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'ParagraphText',
                    label: 'Excerpt Text',
                    fieldContent: {
                        htmlText: '<p>Type the excerpt from the page content...</p>'
                    }
                },
                readMoreLabel: {
                    indexNumber: 1,
                    type: 'StringValue',
                    label: 'Read More Link Label',
                    fieldContent: {
                        value: 'Read More'
                    }
                }
            }
        }
    }
};
