import {DataFieldConfig} from '@sitebud/sdk-lib';

export const siteFields: Record<string, DataFieldConfig> = {
    siteTitle: {
        label: 'Global Site Title',
        indexNumber: 0,
        dataType: 'string',
        inputType: 'text'
    },
    siteLogo: {
        indexNumber: 1,
        label: 'Site Logo',
        dataType: 'string',
        inputType: 'image'
    }
};
