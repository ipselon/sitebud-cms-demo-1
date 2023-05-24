import {BlockConfig} from '@sitebud/sdk-lib';

export const cardTitleBlock: BlockConfig = {
    label: 'Card Title Block',
    description: 'A card title is a concise, eye-catching headline displayed on a compact preview of a webpage\'s content.',
    imageName: 'card_title_block.png',
    components: {
        cardTitle: {
            indexNumber: 0,
            label: 'Card Title',
            helpText: 'A card title is a concise, eye-catching headline displayed on a compact preview of a webpage\'s content.',
            imageName: '',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'ParagraphText',
                    label: '',
                    fieldContent: {
                        htmlText: '<h5>Type the card title...</h5>'
                    }
                },
            }
        }
    }
};
