import {BlockConfig} from '@sitebud/sdk-lib';

export const categoryGalleryBlock: BlockConfig = {
    label: 'Gallery of Categories Block',
    description: 'A display of category thumbnails, each representing a specific topic, creates a visually organized collection of compact previews.',
    imageName: 'categories_gallery_block.png',
    components: {
        galleryListing: {
            indexNumber: 2,
            label: 'List of Documents Representing Categories in the Gallery',
            helpText: 'The list of selected documents for a gallery is a curated collection of items, chosen based on relevance or importance, to be showcased within the gallery.',
            imageName: '',
            props: {
                documentsList: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['CategoryPage'],
                    }
                }
            }
        },
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
        fullGalleryLink: {
            indexNumber: 1,
            label: 'Link to Full Gallery Document',
            helpText: 'The link to the full gallery is a convenient navigation element that directs users to a dedicated document containing the complete collection of category thumbnails. By clicking on this link, users can easily access and explore the entire gallery of categories, ensuring they discover all available topics and content.',
            imageName: '',
            props: {
                link: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    label: '',
                    isRequired: true,
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                        itemsLimit: 1,
                        allowedDocumentClasses: ['CategoriesPage'],
                    }
                }
            }
        }
    }
};
