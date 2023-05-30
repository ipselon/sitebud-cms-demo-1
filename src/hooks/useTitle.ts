import {useAdaptedContent} from '@/adapters';

export function useSiteTitle(): string {
    const contentContext = useAdaptedContent();
    if (contentContext?.siteContent) {
        const {documentAreas: {metaData}} = contentContext.siteContent;
        if (metaData) {
            for(const metaDataItem of metaData) {
                const {menuLogoBlock} = metaDataItem;
                if (menuLogoBlock?.logoTitle.text) {
                    return menuLogoBlock?.logoTitle.text;
                }
            }
        }
    }
    return '';
}
