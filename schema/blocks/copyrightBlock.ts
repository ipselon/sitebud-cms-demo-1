import {BlockConfig} from '@sitebud/sdk-lib';

export const copyrightBlock: BlockConfig = {
    label: 'Copyright Block',
    description: 'Copyright on a web page refers to the legal protection granted to the creator or owner of original content, such as text, images, videos, or designs, published on the website. It prevents unauthorized copying, distribution, or modification of the content without the permission of the copyright holder.',
    imageName: 'copyright-block.webp',
    components: {
        copyright: {
            indexNumber: 0,
            label: 'Copyright',
            helpText: 'Copyright on a web page refers to the legal protection granted to the creator or owner of original content, such as text, images, videos, or designs, published on the website. It prevents unauthorized copying, distribution, or modification of the content without the permission of the copyright holder.',
            imageName: 'copy-right-block.wwebp',
            props: {
                year: {
                    indexNumber: 0,
                    type: 'StringValue',
                    label: 'Copyright Year',
                    fieldContent: {
                        isRequired: true
                    }
                },
                text: {
                    indexNumber: 1,
                    type: 'StringValue',
                    label: 'Copyright Text',
                    fieldContent: {
                        isRequired: true
                    }
                },
                link: {
                    indexNumber: 2,
                    type: 'Link',
                    label: 'Copyright Document Link',
                    fieldContent: {
                        isRequired: false,
                    }
                },
            }
        }
    }
};
