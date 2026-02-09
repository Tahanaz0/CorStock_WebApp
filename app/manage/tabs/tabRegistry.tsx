import UsersTab from "./UsersTab";
import SitesTab from "./SitesTab";
import SuppliersTab from "./SuppliersTab";
import CategoriesTab from "./CategoriesTab";
import TagsTab from "./TagsTab";
import TemplatesTab from "./Template";
import SystemSettingsTab from "./SystemSettingsTab";
import AuditLogTab from "./AuditLogTab";

// Add templates to tabTitles
export const tabTitles: Record<string, string> = {
  users: "Users",
  sites: "Sites",
  suppliers: "Suppliers",
  categories: "Categories",
  tags: "Tags",
  system: "System Settings",
  templates: "Templates",
  audit: "Audit Logs",
};

// Add TemplatesTab to tabComponents
export const tabComponents: Record<string, React.ComponentType<any>> = {
  users: UsersTab,
  sites: SitesTab,
  suppliers: SuppliersTab,
  categories: CategoriesTab,
  tags: TagsTab,
  templates: TemplatesTab,
  audit: AuditLogTab,
  // Add other tabs here
};

// Add templates to specialTabs if needed
export const specialTabs: Record<string, React.ComponentType<any>> = {
  system: SystemSettingsTab,
};