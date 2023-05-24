import {BlockConfig} from '@sitebud/sdk-lib';

export const authorProfileAvatarBlock: BlockConfig = {
    label: 'Author Avatar',
    description: 'A small graphical representation, often a profile picture or an icon, used to visually represent a user, author, or member. Avatars personalize the user experience, making it easier for visitors to recognize and connect with content creators or other users in online interactions, such as in comments, forums, or author bylines.',
    imageName: 'author_profile_avatar_block.png',
    components: {
        avatar: {
            indexNumber: 0,
            label: '',
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
