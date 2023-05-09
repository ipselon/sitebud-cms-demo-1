import {useAdaptedContent} from '@/adapters';

export function useSiteTitle(pageTitle: string): string {
    const {siteContent} = useAdaptedContent();
    if (siteContent?.dataFields.siteTitle?.value) {
        return `${pageTitle} | ${siteContent.dataFields.siteTitle?.value}`;
    }
    return pageTitle;
}
