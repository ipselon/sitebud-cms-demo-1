import {DataFieldConfig} from '@sitebud/sdk-lib';
import {metaDescription} from './common/metaDescription';
import {metaRobots} from './common/metaRobots';

export const searchPageFields: Record<string, DataFieldConfig> = {
    metaDescription: {...metaDescription, indexNumber: 0, defaultValue: 'Search Page'},
    metaRobots: {...metaRobots, indexNumber: 1, defaultValue: 'noindex,nofollow'},
};
