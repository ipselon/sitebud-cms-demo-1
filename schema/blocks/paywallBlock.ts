import {BlockConfig} from '@sitebud/sdk-lib';

export const paywallBlock: BlockConfig = {
    label: 'Paywall Block',
    description: 'A paywall is a digital barrier placed on a website that restricts access to certain content. All subsequent blocks will be placed behind the paywall, restricting access to users who have an access level lower than what\'s set in the paywall block.',
    imageName: '',
    paywall: {
        defaultAccessLevel: 'Public Access',
        accessLevelVariants: ['Public Access', 'User Access', 'Premium User Access']
    },
    components: {
        paywallParagraph: {
            indexNumber: 0,
            label: 'Paywall Text',
            helpText: 'Include a brief explanatory text about the paywall restrictions within your document. This text can help inform visitors about the benefits of upgrading their access level, as well as what exclusive content awaits them behind the paywall. A considerate message can encourage users to support your work and gain access to valuable, premium content, enriching their overall experience on your website.',
            imageName: '',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<p>Thank you for visiting our website! The content you\'re trying to access is part of our exclusive, premium section. To gain access to the premium content, simply click the \'Upgrade\' button and choose the plan that suits you best. Happy browsing, and we hope you enjoy the premium experience!</p>'
                    }
                }
            }
        }
    }
};
