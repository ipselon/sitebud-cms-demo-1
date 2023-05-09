import {DataFieldConfig} from '@sitebud/sdk-lib';

export const metaRobots: DataFieldConfig = {
    label: 'Robots Meta Tag',
    indexNumber: 1,
    dataType: 'string',
    inputType: 'select',
    defaultValue: 'index,follow',
    variants: [
        {
            label: 'Allow indexing and following links',
            value: 'index,follow'
        },
        {
            label: 'Prevent indexing and following links',
            value: 'noindex,nofollow',
        },
        {
            label: 'Allow indexing but prevent following links',
            value: 'index,nofollow',
        },
        {
            label: 'Prevent indexing but allow following links',
            value: 'noindex,follow',
        }
    ]
};
