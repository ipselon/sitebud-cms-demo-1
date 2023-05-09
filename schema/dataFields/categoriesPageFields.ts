import {DataFieldConfig} from '@sitebud/sdk-lib';
import {metaDescription} from './common/metaDescription';
import {metaRobots} from './common/metaRobots';

export const categoriesPageFields: Record<string, DataFieldConfig> = {
    metaDescription: {...metaDescription, indexNumber: 0},
    metaRobots: {...metaRobots, indexNumber: 1}
};
