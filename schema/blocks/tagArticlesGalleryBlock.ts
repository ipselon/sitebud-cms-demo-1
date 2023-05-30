import {BlockConfig} from '@sitebud/sdk-lib';

export const tagArticlesGalleryBlock: BlockConfig = {
    label: 'Gallery of Articles with Associated Tag Block',
    description: 'A display of article thumbnails creates a visually organized collection of compact previews. ',
    imageName: 'articles_gallery_block.png',
    components: {
        galleryListing: {
            indexNumber: 0,
            label: 'Tag associated with Documents Representing Articles',
            helpText: 'Choose a tag that is associated with the articles you want to include in the gallery.',
            imageName: 'articles_gallery_block.png',
            props: {
                documentList: {
                    indexNumber: 1,
                    type: 'DocumentsList',
                    isRequired: true,
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                        allowedDocumentClasses: ['ArticlePage']
                    }
                }
            }
        }
    }
};
