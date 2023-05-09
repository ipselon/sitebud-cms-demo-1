import {BlockConfig} from '@sitebud/sdk-lib';

export const authorProfileSocialLinksBlock: BlockConfig = {
    label: 'Social Links',
    description: 'The social links block is a designated area that contains clickable icons or links directing users to the website\'s or authors\'s social media profiles.',
    imageName: 'author-profile-social-links-block.webp',
    components: {
        socialLinks: {
            isArray: true,
            indexNumber: 0,
            label: 'Social Links',
            helpText: 'When adding social network links to a website, you will need to create a new item for each social network you want to include. First, select the appropriate social network from the provided dropdown field, such as Facebook, Twitter, or Instagram. Then, simply enter the URL address of your profile on that specific social network. By following these steps, you\'ll be able to incorporate social links into your website, allowing visitors to easily find and connect with your profiles across various platforms.',
            props: {
                network: {
                    indexNumber: 0,
                    label: 'Social Network',
                    type: 'StringValue',
                    fieldContent: {
                        value: 'twitter',
                        isRequired: true,
                    },
                    fieldContentVariants: [
                        {
                            label: 'Twitter',
                            fieldContent: {
                                value: 'twitter'
                            }
                        },
                        {
                            label: 'Facebook',
                            fieldContent: {
                                value: 'facebook'
                            }
                        },
                        {
                            label: 'Instagram',
                            fieldContent: {
                                value: 'instagram'
                            }
                        }
                    ]
                },
                link: {
                    indexNumber: 1,
                    label: 'Network Profile URL',
                    type: 'StringValue',
                    fieldContent: {
                        isRequired: true
                    }
                }
            }
        }
    }
};
