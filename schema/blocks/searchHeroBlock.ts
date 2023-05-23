import {BlockConfig} from '@sitebud/sdk-lib';

export const searchHeroBlock: BlockConfig = {
    label: 'Search Hero',
    description: 'These texts will serve as a heading or title on the search results page.',
    imageName: 'search_hero_block.png',
    components: {
        searchResultsListTitle: {
            indexNumber: 0,
            label: 'Search Results List Title',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Search Results</h1>'
                    }
                }
            }
        },
        searchResultsEmptyListMessage: {
            indexNumber: 0,
            label: 'Message Text When the Result List is Empty',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<h5>Nothing was found by your request</h5>'
                    }
                }
            }
        }
    }
};
