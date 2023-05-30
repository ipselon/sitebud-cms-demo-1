import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From Site_MetaData
 */
export type Site_MetaData_MenuLogoBlock = {
    __accessLevel?: number;
    logoImage: { image: ImageField };
    logoTitle: { text: string };
};
/**
 * From Document Areas
 */
export type Site_MetaData = Array<{
    menuLogoBlock?: Site_MetaData_MenuLogoBlock;
}>;
/**
 * From Site_MainMenu
 */
export type Site_MainMenu_MenuLinksBlock = {
    __accessLevel?: number;
    menuLinks: Array<{ link: LinkField; label: string }>;
};
/**
 * From Site_MainMenu
 */
export type Site_MainMenu_MenuDocumentsBlock = {
    __accessLevel?: number;
    menuDocuments: { documentsList: DocumentsListField };
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
    menuLinks: Array<{ link: LinkField; label: string }>;
};
/**
 * From Site_Footer
 */
export type Site_Footer_MenuDocumentsBlock = {
    __accessLevel?: number;
    menuDocuments: { documentsList: DocumentsListField };
};
/**
 * From Site_Footer
 */
export type Site_Footer_CopyrightBlock = {
    __accessLevel?: number;
    copyright: { year: string; text: string; link: LinkField };
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
    metaData: Site_MetaData;
    mainMenu: Site_MainMenu;
    footer: Site_Footer;
};
/**
 * Document Content
 */
export type SiteContent = {
    hasRestrictedAreas?: boolean;
    documentAreas: Site_DocumentAreas;
};