import {BlockConfig} from '@sitebud/sdk-lib';

export const defaultHeadingBlock: BlockConfig = {
    label: 'Heading Block',
    description: 'The heading is a section within the main content of a web page, used to highlight the title or heading of a chapter, section, or topic.',
    imageName: 'default_heading_block.png',
    components: {
        defaultHeading: {
            indexNumber: 0,
            label: 'Heading',
            helpText: 'The heading is a section within the main content of a web page, used to highlight the title or heading of a chapter, section, or topic.',
            imageName: '',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Type the heading text here...</h1>'
                    }
                }
            }
        }
    }
};
