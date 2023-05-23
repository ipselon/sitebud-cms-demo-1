import {BlockConfig} from '@sitebud/sdk-lib';

export const tagsListBlock: BlockConfig = {
    label: 'Tags List Block',
    description: 'A collection of keyword phrases that categorize and summarize the content of the webpage. Each tag is a link that, when clicked, takes you to a page showing all content associated with that tag.',
    imageName: 'tags_list_block.png',
    components: {
        tags: {
            indexNumber: 0,
            label: 'Tags List',
            helpText: 'The links to specific tag documents. When the page is rendered, these become active links to the respective tag pages.',
            imageName: '',
            props: {
                documentsList: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    isRequired: true,
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['TagPage']
                    }
                },
            }
        }
    }
};
