import {BlockConfig} from '@sitebud/sdk-lib';

export const menuLinksBlock: BlockConfig = {
    label: 'Menu Links Block',
    description: 'A structured menu of hyperlinks connecting external pages.',
    imageName: 'menu-documents-block.webp',
    components: {
        menuLinks: {
            indexNumber: 0,
            isArray: true,
            label: 'Menu Links',
            helpText: 'A structured menu of hyperlinks connecting external pages.',
            imageName: 'menu-documents-block.webp',
            props: {
                link: {
                    indexNumber: 0,
                    type: 'Link',
                    label: 'Link',
                    fieldContent: {
                        isRequired: true
                    }
                },
                label: {
                    indexNumber: 1,
                    type: 'StringValue',
                    label: 'Link Label',
                    fieldContent: {
                        isRequired: true
                    }
                }
            }
        }
    }
};
