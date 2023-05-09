import {DataFieldConfig} from '@sitebud/sdk-lib';
import {metaRobots} from './common/metaRobots';
import {metaDescription} from './common/metaDescription';

export const articlePageFields: Record<string, DataFieldConfig> = {
    metaDescription: {...metaDescription, indexNumber: 0},
    metaRobots: {...metaRobots, indexNumber: 1}
};
