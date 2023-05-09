import {BlockConfig} from '@sitebud/sdk-lib';

export const tagsGalleryBlock: BlockConfig = {
    label: 'Gallery of Tags Block',
    description: 'A display of tag thumbnails, each representing a specific tag, creates a visually organized collection of compact previews. This easy-to-browse gallery allows users to quickly identify and navigate to their desired content within each tag.',
    imageName: 'tags-gallery-block.webp',
    components: {
        galleryListing: {
            indexNumber: 0,
            label: 'Gallery of Categories',
            helpText: 'A display of tag thumbnails, each representing a specific tag, creates a visually organized collection of compact previews. This easy-to-browse gallery allows users to quickly identify and navigate to their desired content within each tag.',
            imageName: 'tags-gallery-block.webp',
            props: {
                documentsList: {
                    indexNumber: 1,
                    type: 'DocumentsList',
                    label: '',
                    fieldContent: {
                        isRequired: false,
                        selectionMode: 'selectDocuments',
                        selectDocumentAreas: ['card'],
                        allowedDocumentClasses: ['TagPage'],
                    },
                    fieldContentVariants: [
                        {
                            label: 'Select Documents',
                            fieldContent: {
                                selectionMode: 'selectDocuments',
                                selectDocumentAreas: ['card'],
                                allowedDocumentClasses: ['TagPage'],
                            }
                        },
                        {
                            label: 'Select By Parent Documents',
                            fieldContent: {
                                selectionMode: 'selectChildrenDocuments',
                                selectDocumentAreas: ['card'],
                            }
                        }
                    ]
                }
            }
        }
    }
};
