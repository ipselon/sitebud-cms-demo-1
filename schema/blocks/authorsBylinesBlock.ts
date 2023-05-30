import {BlockConfig} from '@sitebud/sdk-lib';

export const authorsBylinesBlock: BlockConfig = {
    label: 'Authors Bylines Block',
    description: 'A brief section that attributes the content to its creator by displaying the author\'s name. It often appears near the beginning or end of an article or post and may include a link to the author\'s profile.',
    imageName: 'authors_bylines_block.png',
    components: {
        authorsBylines: {
            indexNumber: 0,
            label: 'Authors Links',
            helpText: 'This block will automatically populate with the author\'s details sourced from the linked author profile document when the page is rendered.\n\nThe author profile document should contain relevant author information such as name, profile picture, etc. This data will be displayed as the author byline in the Author Profile.',
            imageName: '',
            props: {
                documentsList: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    isRequired: true,
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['AuthorProfilePage']
                    }
                },
            }
        }
    }
};
