import {DataFieldConfig} from '@sitebud/sdk-lib';
import {metaDescription} from './common/metaDescription';
import {metaRobots} from './common/metaRobots';

export const mainPageFields: Record<string, DataFieldConfig> = {
    metaDescription: {...metaDescription, indexNumber: 0},
    metaRobots: {...metaRobots, indexNumber: 1},
    twitterCardImage: {
        indexNumber: 2,
        label: 'Twitter Card',
        inputType: 'image',
        dataType: 'string'
    }
};
