import {BlockConfig} from '@sitebud/sdk-lib';

export const tagArticlesGalleryBlock: BlockConfig = {
    label: 'Gallery of Articles with Associated Tag Block',
    description: 'A display of article thumbnails creates a visually organized collection of compact previews. ',
    imageName: 'tag-articles-gallery-block.webp',
    components: {
        galleryListing: {
            indexNumber: 0,
            label: 'Tag associated with Documents Representing Articles',
            helpText: 'Choose a tag that is associated with the articles you want to include in the gallery.',
            imageName: 'tag-articles-gallery-block.webp',
            props: {
                documentList: {
                    indexNumber: 1,
                    type: 'DocumentsList',
                    fieldContent: {
                        isRequired: true,
                        selectionMode: 'selectDocuments',
                        selectDocumentAreas: ['card', 'metaData'],
                        allowedDocumentClasses: ['ArticlePage']
                    }
                }
            }
        }
    }
};
