import {BlockConfig} from '@sitebud/sdk-lib';

export const defaultImageBlock: BlockConfig = {
    label: 'Image Block',
    description: 'An image adds a visual touch to the article.',
    imageName: 'default-image-block.webp',
    components: {
        defaultImage: {
            indexNumber: 0,
            label: 'Image',
            helpText: 'An image adds a visual touch to the article. It makes the text more enjoyable to read, grabs attention, and helps explain ideas or topics by giving a picture that goes hand-in-hand with the words.',
            imageName: 'default-image-block.webp',
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
