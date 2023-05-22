import {BlockConfig} from '@sitebud/sdk-lib';

export const cardCategoryLinkBlock: BlockConfig = {
    label: 'Card Category Link Block',
    description: 'A category link on the card of an article is a clickable element that directs users to a category webpage containing similar or related content.',
    imageName: '',
    components: {
        categoryLink: {
            indexNumber: 0,
            label: 'Card Category Link',
            helpText: 'A category link on the card of an article is a clickable element that directs users to a category webpage containing similar or related content.',
            imageName: '',
            props: {
                link: {
                    indexNumber: 0,
                    type: 'Link',
                    label: 'Link to the Category Document',
                    isRequired: true,
                    fieldContent: {}
                },
                label: {
                    indexNumber: 1,
                    type: 'StringValue',
                    label: 'Label to Link',
                    isRequired: true,
                    fieldContent: {}
                },
            }
        }
    }
};
