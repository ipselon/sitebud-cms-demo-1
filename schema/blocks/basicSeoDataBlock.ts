import {BlockConfig} from '@sitebud/sdk-lib';

export const  basicSeoDataBlock: BlockConfig = {
    label: 'SEO Data Block',
    description: 'Meta data fields for SEO are crucial elements of a webpage that help search engines understand the content and context of your page. They\'re not visible to users on the webpage itself, but they\'re used in search engine results.',
    imageName: 'meta_data_block.webp',
    components: {
        metaDataFields: {
            indexNumber: 0,
            label: 'Meta Data Fields',
            helpText: 'Meta data fields for SEO are crucial elements of a webpage that help search engines understand the content and context of your page. They\'re not visible to users on the webpage itself, but they\'re used in search engine results.',
            imageName: '',
            props: {
                description: {
                    indexNumber: 0,
                    label: 'Description',
                    type: 'StringValue',
                    isRequired: true,
                    fieldContent: {}
                },
                robots: {
                    indexNumber: 0,
                    label: 'Robots',
                    type: 'StringValue',
                    fieldContent: {
                        value: 'index,follow'
                    },
                    fieldContentVariants: [
                        {
                            label: 'Allow indexing and following links',
                            fieldContent: {
                                value: 'index,follow'
                            }
                        },
                        {
                            label: 'Prevent indexing and following links',
                            fieldContent: {
                                value: 'noindex,nofollow'
                            }
                        },
                        {
                            label: 'Allow indexing but prevent following links',
                            fieldContent: {
                                value: 'index,nofollow'
                            }
                        },
                        {
                            label: 'Prevent indexing but allow following links',
                            fieldContent: {
                                value: 'noindex,follow'
                            }
                        },
                    ]
                }
            }
        }
    }
};
