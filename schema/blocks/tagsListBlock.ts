import {BlockConfig} from '@sitebud/sdk-lib';

export const tagsListBlock: BlockConfig = {
    label: 'Tags List Block',
    description: 'A collection of keyword phrases that categorize and summarize the content of the webpage. Each tag is a link that, when clicked, takes you to a page showing all content associated with that tag. This makes it easier for visitors to find related content based on their interests.',
    imageName: '',
    components: {
        tags: {
            indexNumber: 0,
            label: 'Tags List',
            helpText: 'A collection of keyword phrases that categorize and summarize the content of the webpage. Each tag is a link that, when clicked, takes you to a page showing all content associated with that tag. This makes it easier for visitors to find related content based on their interests.',
            imageName: '',
            props: {
                documentsList: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    fieldContent: {
                        isRequired: true,
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['TagPage']
                    }
                },
            }
        }
    }
};
