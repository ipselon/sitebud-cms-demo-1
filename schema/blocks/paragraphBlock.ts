import {BlockConfig} from '@sitebud/sdk-lib';

export const paragraphBlock: BlockConfig = {
    label: 'Paragraph Block',
    description: 'The paragraph is a section within the content of a web page that contains a block of text, usually conveying a single idea or concept.',
    imageName: 'paragraph_block.png',
    components: {
        paragraph: {
            indexNumber: 0,
            label: 'Paragraph',
            helpText: 'The paragraph is a section within the content of a web page that contains a block of text, usually conveying a single idea or concept. It helps readers to easily digest the content by breaking it into smaller, manageable chunks.',
            imageName: 'paragraph_block.png',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<p>Type the paragraph text here...</p>'
                    }
                }
            }
        }
    }
};
