import {DocumentConfig} from '@sitebud/sdk-lib';
import {searchHeroBlock} from '../blocks/searchHeroBlock';
import {basicSeoDataBlock} from '../blocks/basicSeoDataBlock';

export const SearchPage: DocumentConfig = {
    type: 'page',
    label: 'Search Page',
    defaultTitle: 'Search',
    defaultSlug: 'search',
    description: 'A search webpage is a dedicated section of a website that allows users to input keywords or phrases to find specific content within the site. It typically features a search bar or box where users enter their query, and the search engine then returns a list of relevant results, often ranked by relevance.',
    imageName: 'search_document.png',
    documentAreas: {
        pageBody: {
            indexNumber: 0,
            label: 'Page Body',
            helpText: 'The part of a web page where the main content is displayed. It\'s like the canvas for a painting, containing text, images, videos, and other elements that make up the visible portion of a website.',
            imageName: '',
            blocks: {
                searchHeroBlock
            }
        }
    }
};
