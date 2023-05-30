import {BlockConfig} from '@sitebud/sdk-lib';

export const categoriesGalleryBlock: BlockConfig = {
    label: 'Gallery of Categories Block',
    description: 'A display of category thumbnails, each representing a specific topic, creates a visually organized collection of compact previews. This easy-to-browse gallery allows users to quickly identify and navigate to their desired content within each category.',
    imageName: 'categories_gallery_block.png',
    components: {
        galleryListing: {
            indexNumber: 0,
            label: 'Gallery of Categories',
            helpText: 'The list of selected documents for a gallery is a curated collection of items, chosen based on relevance or importance, to be showcased within the gallery.',
            imageName: '',
            props: {
                documentsList: {
                    indexNumber: 1,
                    type: 'DocumentsList',
                    label: '',
                    isRequired: true,
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['CategoryPage']
                    },
                    fieldContentVariants: [
                        {
                            label: 'Select Documents',
                            fieldContent: {
                                selectionMode: 'selectDocuments',
                                allowedDocumentClasses: ['CategoryPage']
                            }
                        },
                        {
                            label: 'Select By Parent Documents',
                            fieldContent: {
                                selectionMode: 'selectChildrenDocuments'
                            }
                        }
                    ]
                },
            }
        }
    }
};
