import {BlockConfig} from '@sitebud/sdk-lib';

export const codeBlock: BlockConfig = {
    label: 'Code Block',
    description: 'A source code block on a webpage is a designated area used to display programming code snippets or examples.',
    imageName: '',
    components: {
        paragraph: {
            indexNumber: 0,
            label: 'Paragraph with Source Code',
            helpText: 'The text is formatted to accommodate the inclusion of programming code snippets or examples within the flow of the content.',
            imageName: '',
            props: {
                text: {
                    indexNumber: 1,
                    label: 'Text',
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<pre class="sb-code-block"><code>Type the source code here...</code></pre>'
                    }
                },
                language: {
                    indexNumber: 0,
                    label: 'Language',
                    type: 'StringValue',
                    fieldContent: {
                        value: 'javascript'
                    },
                    fieldContentVariants: [
                        {
                            label: 'JavaScript',
                            fieldContent: {
                                value: 'javascript'
                            }
                        },
                        {
                            label: 'TypeScript',
                            fieldContent: {
                                value: 'typescript'
                            }
                        },
                        {
                            label: 'JSON',
                            fieldContent: {
                                value: 'json'
                            }
                        },
                    ]
                }
            }
        }
    }
};
