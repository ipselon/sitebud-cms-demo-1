import {BlockConfig} from '@sitebud/sdk-lib';

export const authorProfileInfoBlock: BlockConfig = {
    label: 'Author Info',
    description: 'The author name and email',
    imageName: 'author-profile-info-block.webp',
    components: {
        info: {
            indexNumber: 0,
            label: '',
            props: {
                fullName: {
                    indexNumber: 0,
                    label: 'Full Name',
                    type: 'StringValue',
                    fieldContent: {
                        isRequired: true
                    }
                },
                email: {
                    indexNumber: 0,
                    label: 'Email',
                    type: 'StringValue',
                    fieldContent: {
                        isRequired: true
                    }
                }
            }
        }
    }
};
