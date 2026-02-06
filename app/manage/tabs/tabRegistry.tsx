import UsersTab from "./UsersTab";
import SitesTab from "./SitesTab";
import SuppliersTab from "./SuppliersTab";
import CategoriesTab from "./CategoriesTab";
import TagsTab from "./TagsTab";
import TemplatesTab from "./Template";
import AuditLogTab from "./AuditLogTab";
import SystemSettingsTab from "./SystemSettingsTab"; // یہ شامل کریں

// Add all tab titles
export const tabTitles: Record<string, string> = {
  users: "Users",
  sites: "Sites",
  suppliers: "Suppliers",
  categories: "Categories",
  tags: "Tags",
  system: "System Settings",
  templates: "Templates",
  audit: "Audit Log",
};

// Regular tabs (with stats and pagination)
export const tabComponents: Record<string, React.ComponentType<any>> = {
  users: UsersTab,
  sites: SitesTab,
  suppliers: SuppliersTab,
  categories: CategoriesTab,
  tags: TagsTab,
  templates: TemplatesTab,
  audit: AuditLogTab,
};

// Special tabs (without stats and pagination props)
export const specialTabs: Record<string, React.ComponentType<any>> = {
  system: SystemSettingsTab, // یہاں register کریں
};