import {BlockConfig} from '@sitebud/sdk-lib';

export const tagsGalleryBlock: BlockConfig = {
    label: 'Gallery of Tags Block',
    description: 'A display of tag thumbnails, each representing a specific tag, creates a visually organized collection of compact previews. This easy-to-browse gallery allows users to quickly identify and navigate to their desired content within each tag.',
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
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['TagPage'],
                    },
                    fieldContentVariants: [
                        {
                            label: 'Select Documents',
                            fieldContent: {
                                selectionMode: 'selectDocuments',
                                allowedDocumentClasses: ['TagPage'],
                            }
                        },
                        {
                            label: 'Select By Parent Documents',
                            fieldContent: {
                                selectionMode: 'selectChildrenDocuments',
                            }
                        }
                    ]
                }
            }
        }
    }
};
