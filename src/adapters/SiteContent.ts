import { DocumentContentContext, DataFieldType } from './types';
/**
 * From Site_MainMenu
 */
export type Site_MainMenu_MenuLinksBlock = {
    __accessLevel?: number;
    menuLinks: Array<{ link: { href: string; target: string }; label: string }>;
};
/**
 * From Site_MainMenu
 */
export type Site_MainMenu_MenuDocumentsBlock = {
    __accessLevel?: number;
    menuDocuments: { documentsList: Array<DocumentContentContext> };
};
/**
 * From Document Areas
 */
export type Site_MainMenu = Array<{
    menuLinksBlock?: Site_MainMenu_MenuLinksBlock;
    menuDocumentsBlock?: Site_MainMenu_MenuDocumentsBlock;
}>;
/**
 * From Site_Footer
 */
export type Site_Footer_MenuLinksBlock = {
    __accessLevel?: number;
    menuLinks: Array<{ link: { href: string; target: string }; label: string }>;
};
/**
 * From Site_Footer
 */
export type Site_Footer_MenuDocumentsBlock = {
    __accessLevel?: number;
    menuDocuments: { documentsList: Array<DocumentContentContext> };
};
/**
 * From Site_Footer
 */
export type Site_Footer_CopyrightBlock = {
    __accessLevel?: number;
    copyright: {
        year: string;
        text: string;
        link: { href: string; target: string };
    };
};
/**
 * From Site_Footer
 */
export type Site_Footer_ParagraphBlock = {
    __accessLevel?: number;
    paragraph: { text: string };
};
/**
 * From Document Areas
 */
export type Site_Footer = Array<{
    menuLinksBlock?: Site_Footer_MenuLinksBlock;
    menuDocumentsBlock?: Site_Footer_MenuDocumentsBlock;
    copyrightBlock?: Site_Footer_CopyrightBlock;
    paragraphBlock?: Site_Footer_ParagraphBlock;
}>;
/**
 * Document Areas
 */
export type Site_DocumentAreas = {
    mainMenu: Site_MainMenu;
    footer: Site_Footer;
};
/**
 * Data Fields
 */
export type Site_DataFields = {
    siteTitle?: { value: string; type: DataFieldType };
    siteLogo?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type SiteContent = {
    hasRestrictedAreas?: boolean;
    availableLocales: Array<string>;
    tagsLinks: Record<string, string>;
    authorProfiles: Record<string, DocumentContentContext>;
    dataFields: Site_DataFields;
    documentAreas: Site_DocumentAreas;
};