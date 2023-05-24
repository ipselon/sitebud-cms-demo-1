import {BlockConfig} from '@sitebud/sdk-lib';

export const cardImageBlock: BlockConfig = {
    label: 'Card View Image Block',
    description: 'A card image is a small, visually appealing picture featured on a compact preview of a webpage\'s content.',
    imageName: 'card_image_block.png',
    components: {
        cardViewImage: {
            indexNumber: 0,
            label: 'Card View Image',
            helpText: 'A card image is a small, visually appealing picture featured on a compact preview of a webpage\'s content.',
            imageName: '',
            props: {
                image: {
                    indexNumber: 0,
                    type: 'Image',
                    fieldContent: {}
                },
            }
        }
    }
};
