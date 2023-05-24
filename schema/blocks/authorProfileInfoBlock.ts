import {BlockConfig} from '@sitebud/sdk-lib';

export const authorProfileInfoBlock: BlockConfig = {
    label: 'Author Info',
    description: 'The author name and email',
    imageName: 'author_profile_info_block.png',
    components: {
        info: {
            indexNumber: 0,
            label: '',
            props: {
                fullName: {
                    indexNumber: 0,
                    label: 'Full Name',
                    type: 'StringValue',
                    isRequired: true,
                    fieldContent: {}
                },
                email: {
                    indexNumber: 0,
                    label: 'Email',
                    type: 'StringValue',
                    isRequired: true,
                    fieldContent: {}
                }
            }
        }
    }
};
