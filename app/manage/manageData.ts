// Shared types and static data for Manage page

export type TabItem = { id: string; label: string };
export type StatItem = { title: string; value: number; icon?: string };
export type UserData = {
  name: string;
  role: string;
  email: string;
  siteAccess: string;
  lastLogin: string;
  status: string;
};
export type SiteData = {
  site: string;
  code: string;
  manager: string;
  items: number;
  status: string;
};
export type SupplierData = {
  name: string;
  email: string;
  leadTime: string;
  category: string;
  posLinked: number;
  status: string;
};
export type TagData = {
  tag: string;
  colourName: string;
  colourClass: string;
  usageCount: number;
};
export type TemplateData = {
  name: string;
  size: string;
  type: string;
  updated: string;
};
export type AuditLogData = {
  dateTime: string;
  user: string;
  changeType: string;
  entity: string;
  before: string;
  after: string;
};

export const tabs: TabItem[] = [
  { id: "users", label: "Users" },
  { id: "sites", label: "Sites" },
  { id: "suppliers", label: "Suppliers" },
  { id: "categories", label: "Categories" },
  { id: "tags", label: "Tags" },
  { id: "system", label: "System Settings" },
  { id: "templates", label: "Templates" },
  { id: "audit", label: "Audit Logs" },
];

// Templates stats
export const templatesStats: StatItem[] = [
  { title: "Total Templates", value: 8 },
  { title: "Inventory Templates", value: 3 },
  { title: "Supplier Templates", value: 2 },
  { title: "Label Templates", value: 3 },
];

// Audit Log Stats
export const auditLogStats: StatItem[] = [
  { title: "Total Audit Entries", value: 9 },
  { title: "Entries This Week", value: 26 },
  { title: "Unique Users Logged", value: 2 },
  { title: "Errors Logged", value: 0 },
];

export const statsData: Record<string, StatItem[]> = {
  users: [
    { title: "Total Users", value: 446, icon: "/user.png" },
    { title: "Active Users", value: 46, icon: "/active.png" },
    { title: "Pending Invites", value: 12, icon: "/pending.png" },
    { title: "Disabled Accounts", value: 20, icon: "/disable.png" },
  ],
  sites: [
    { title: "Total Sites", value: 14, icon: "/site.png" },
    { title: "Active Sites", value: 39, icon: "/active-site.png" },
    { title: "Inactive Sites", value: 30, icon: "/inactive-site.png" },
  ],
  suppliers: [
    { title: "Total Suppliers", value: 120, icon: "/supplier.png" },
    { title: "Active Suppliers", value: 85, icon: "/active-supplier.png" },
    {
      title: "Inactive Suppliers",
      value: 35,
      icon: "/inactive-supplier.png",
    },
  ],
  templates: templatesStats,
  audit: auditLogStats,
};

export const tagsStats: StatItem[] = [
  { title: "Total Tags", value: 24 },
  { title: "Tagged Items", value: 40 },
  { title: "Untagged Items", value: 32 },
];

// ایک ہی بار declare کریں - updated version
export const tableHeaders = {
  users: [
    "Name",
    "Role",
    "Email",
    "Site Access",
    "Last Login",
    "Status",
    "Actions",
  ],
  sites: ["Site", "Code", "Manager", "Items", "Status", "Actions"],
  suppliers: [
    "Supplier Name",
    "Email",
    "Lead Time",
    "Category",
    "POs Linked",
    "Status",
    "Actions",
  ],
  tags: ["Tag", "Colour", "Usage Count", "Action"],
  templates: ["File Name", "Type", "Last Updated", "Actions"],
  audit: [
    "Date & Time",
    "User",
    "Change Type",
    "Entity",
    "Before",
    "After",
    "Actions",
  ],
} as const;

export const tableData = {
  users: [
    {
      name: "Theresa",
      role: "Admin",
      email: "lline@yandex.com",
      siteAccess: "All",
      lastLogin: "Today 09:14",
      status: "Active",
    },
    {
      name: "Irma",
      role: "Manager",
      email: "ustil@mail.com",
      siteAccess: "Procurement",
      lastLogin: "Yesterday",
      status: "Disabled",
    },
    {
      name: "Courtney",
      role: "Storekeeper",
      email: "seema@gmail.com",
      siteAccess: "Reports",
      lastLogin: "6 days ago",
      status: "Active",
    },
    {
      name: "Jane",
      role: "Electrical",
      email: "maka@yandex.com",
      siteAccess: "All Sites",
      lastLogin: "2 week ago",
      status: "Disabled",
    },
  ] as UserData[],
  sites: [
    {
      site: "Warehouse A - Shelf D",
      code: "220184-H",
      manager: "Theresa",
      items: 65,
      status: "Active",
    },
    {
      site: "Warehouse C - Shelf C",
      code: "SNR-08",
      manager: "Irma",
      items: 120,
      status: "Inactive",
    },
    {
      site: "Warehouse B - Shelf B",
      code: "VAL-05",
      manager: "Courtney",
      items: 62,
      status: "Active",
    },
    {
      site: "Warehouse C - Shelf C",
      code: "PIP-02",
      manager: "Jane",
      items: 4,
      status: "Inactive",
    },
  ] as SiteData[],
  suppliers: [
    {
      name: "Bosch",
      email: "lline@yandex.com",
      leadTime: "6 days",
      category: "Mechanical, Electrical",
      posLinked: 12,
      status: "Active",
    },
    {
      name: "Siemens",
      email: "ustil@mail.com",
      leadTime: "8 days",
      category: "Mechanical",
      posLinked: 62,
      status: "Disabled",
    },
    {
      name: "Conductix",
      email: "seema@gmail.com",
      leadTime: "2 days",
      category: "Mechanical, Electrical",
      posLinked: 4,
      status: "Active",
    },
    {
      name: "Bosch",
      email: "maka@yandex.com",
      leadTime: "7 days",
      category: "Electrical",
      posLinked: 8,
      status: "Disabled",
    },
  ] as SupplierData[],
  tags: [
    {
      tag: "TBM",
      colourName: "Blue",
      colourClass: "bg-blue-500",
      usageCount: 12,
    },
    {
      tag: "Critical",
      colourName: "Red",
      colourClass: "bg-red-500",
      usageCount: 62,
    },
    {
      tag: "High Wear",
      colourName: "Orange",
      colourClass: "bg-orange-400",
      usageCount: 4,
    },
    {
      tag: "Electrical",
      colourName: "Yellow",
      colourClass: "bg-yellow-400",
      usageCount: 8,
    },
  ] as TagData[],
  templates: [
    {
      name: "Inventory Import Template",
      size: "200 KB",
      type: "Inventory",
      updated: "02 12 2023",
    },
    {
      name: "Supplier Import Template",
      size: "200 KB",
      type: "Suppliers",
      updated: "30 Des 2023",
    },
    {
      name: "QR Label Template A",
      size: "200 KB",
      type: "Sites",
      updated: "22 Des 2023",
    },
    {
      name: "GRN Default Template",
      size: "200 KB",
      type: "Inventory",
      updated: "23 Des 2023",
    },
  ] as TemplateData[],
  audit: [
    {
      dateTime: "02 Des 2023, 19:00",
      user: "Jane Cooper",
      changeType: "Min Stock Change",
      entity: "Bolt M10",
      before: "3",
      after: "3",
    },
    {
      dateTime: "22 Des 2023, 11:40",
      user: "Eleanor Pena",
      changeType: "Status Change",
      entity: "PPE Gloves Small",
      before: "3",
      after: "3",
    },
    {
      dateTime: "23 Des 2023, 17:20",
      user: "Jerome Bell",
      changeType: "Stock Adjustment",
      entity: "Grinding Disc",
      before: "6",
      after: "6",
    },
    {
      dateTime: "30 Des 2023, 10:04",
      user: "Brooklyn Simmons",
      changeType: "Min Stock Change",
      entity: "Bolt M10",
      before: "9",
      after: "9",
    },
  ] as AuditLogData[],
};

export const categoryStats: StatItem[] = [
  { title: "Total Categories", value: 29, icon: "/total-stock.png" },
  { title: "Total Subcategories", value: 27, icon: "/total-sub.png" },
  { title: "Items Without Category", value: 10, icon: "/items.png" },
];

export const categoriesData = [
  {
    name: "Mechanical",
    sub: ["Bearings", "Seals"],
  },
  {
    name: "Electrical",
    sub: [],
  },
  {
    name: "Tools",
    sub: [],
  },
];