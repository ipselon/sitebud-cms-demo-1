import {BlockConfig} from '@sitebud/sdk-lib';

export const categoriesGalleryBlock: BlockConfig = {
    label: 'Gallery of Categories Block',
    description: 'A display of category thumbnails, each representing a specific topic, creates a visually organized collection of compact previews. This easy-to-browse gallery allows users to quickly identify and navigate to their desired content within each category.',
    imageName: 'categories-gallery-block.webp',
    components: {
        galleryListing: {
            indexNumber: 0,
            label: 'Gallery of Categories',
            helpText: 'A display of category thumbnails, each representing a specific topic, creates a visually organized collection of compact previews. This easy-to-browse gallery allows users to quickly identify and navigate to their desired content within each category.',
            imageName: 'categories-gallery-block.webp',
            props: {
                documentsList: {
                    indexNumber: 1,
                    type: 'DocumentsList',
                    label: '',
                    fieldContent: {
                        isRequired: false,
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['CategoryPage'],
                        selectDocumentAreas: ['card'],
                    },
                    fieldContentVariants: [
                        {
                            label: 'Select Documents',
                            fieldContent: {
                                selectionMode: 'selectDocuments',
                                allowedDocumentClasses: ['CategoryPage'],
                                selectDocumentAreas: ['card'],
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
                },
            }
        }
    }
};
