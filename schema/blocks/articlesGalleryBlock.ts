import {BlockConfig} from '@sitebud/sdk-lib';

export const articlesGalleryBlock: BlockConfig = {
    label: 'Gallery of Articles Block',
    description: 'A display of article thumbnails creates a visually organized collection of compact previews.',
    imageName: 'articles-gallery-block.webp',
    components: {
        galleryHeading: {
            indexNumber: 0,
            label: 'Gallery Title',
            helpText: 'A concise and informative heading that describes a collection or showcase of related articles on a webpage.',
            imageName: '',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Type the gallery title...</h1>'
                    }
                }
            }
        },
        galleryListing: {
            indexNumber: 1,
            label: 'Gallery of Articles',
            helpText: 'The list of selected documents for a gallery is a curated collection of items, chosen based on relevance or importance, to be showcased within the gallery.',
            imageName: '',
            props: {
                documentsList: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    label: '',
                    fieldContent: {
                        isRequired: false,
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['ArticlePage'],
                        selectDocumentAreas: ['card', 'metaData'],
                    },
                    fieldContentVariants: [
                        {
                            label: 'Select Documents',
                            fieldContent: {
                                selectionMode: 'selectDocuments',
                                selectDocumentClasses: ['ArticlePage'],
                                allowedDocumentClasses: ['ArticlePage'],
                                selectDocumentAreas: ['card', 'metaData'],
                            }
                        },
                        {
                            label: 'Select By Parent Documents',
                            fieldContent: {
                                selectionMode: 'selectChildrenDocuments',
                                selectDocumentAreas: ['card', 'metaData'],
                                selectDocumentClasses: ['ArticlePage'],
                                allowedDocumentClasses: ['CategoryPage']
                            }
                        }
                    ]
                }
            }
        }
    }
};
