import {BlockConfig} from '@sitebud/sdk-lib';

export const authorsBylinesBlock: BlockConfig = {
    label: 'Authors Bylines Block',
    description: 'A brief section that attributes the content to its creator by displaying the author\'s name. It often appears near the beginning or end of an article or post and may include a link to the author\'s profile. The byline acknowledges the writer\'s work and offers readers an opportunity to explore more about the author and their other contributions.',
    imageName: 'author-profile-author-byline.webp',
    components: {
        authorsBylines: {
            indexNumber: 0,
            label: 'Authors Bylines Links',
            helpText: 'A brief section that attributes the content to its creator by displaying the author\'s name. It often appears near the beginning or end of an article or post and may include a link to the author\'s profile. The byline acknowledges the writer\'s work and offers readers an opportunity to explore more about the author and their other contributions.',
            imageName: 'author-profile-author-byline.webp',
            props: {
                documentsList: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    fieldContent: {
                        isRequired: true,
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['AuthorProfilePage'],
                        selectDocumentAreas: ['authorByline']
                    }
                },
            }
        }
    }
};
