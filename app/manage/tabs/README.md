# Manage Page Tabs - How to Add New Tabs

Yahan tumhara **scalable tab system** hai jo easily extend ho sakta hai.

## Structure

```
app/manage/
├── page.tsx              # Main page (sirf tab switching)
├── manageData.ts         # Sab data (stats, tableData, etc.)
└── tabs/
    ├── UsersTab.tsx      # Users tab component
    ├── SitesTab.tsx      # Sites tab component
    ├── SuppliersTab.tsx  # Suppliers tab component
    ├── CategoriesTab.tsx # Categories tab (special - no table)
    ├── TagsTab.tsx       # Tags tab component
    └── tabRegistry.tsx   # Tab mapping file
```

## Naya Tab Add Karne Ka Process

### Step 1: `manageData.ts` me data add karo

```typescript
// Stats add karo
export const statsData: Record<string, StatItem[]> = {
  // ... existing tabs
  newTab: [
    { title: "Total Items", value: 100, icon: "/icon.png" },
    { title: "Active Items", value: 80 },
  ],
};

// Table data add karo
export const tableData = {
  // ... existing tabs
  newTab: [
    { name: "Item 1", status: "Active" },
    { name: "Item 2", status: "Inactive" },
  ] as NewTabData[],
};

// Type define karo
export type NewTabData = {
  name: string;
  status: string;
};
```

### Step 2: Naya Tab Component banao

`app/manage/tabs/NewTabTab.tsx` file banao:

```typescript
"use client";

import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { NewTabData, StatItem } from "../manageData";

interface NewTabTabProps {
  stats: StatItem[];
  data: NewTabData[];
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

export default function NewTabTab({
  stats,
  data,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: NewTabTabProps) {
  const headers = ["Name", "Status", "Actions"];

  return (
    <>
      {/* Stats Cards */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#EAECF0] rounded-lg p-3 bg-white w-60 h-24"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">{item.title}</p>
              {item.icon && (
                <img src={item.icon} alt={item.title} className="w-7 h-7" />
              )}
            </div>
            <h2 className="text-xl font-semibold mt-1">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl p-4 shadow border border-gray-100">
        {/* Search & Filter */}
        <div className="flex justify-between mb-4 items-center border-b border-[#E6E6E9] pb-3">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm w-64"
            />
          </div>
          <button className="bg-gray-100 rounded-lg px-3 py-1 text-gray-500 flex items-center gap-2 text-sm">
            Filters <FiChevronDown className="text-gray-400" />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-[#E6E6E9] rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 text-left text-gray-500 font-medium"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, idx) => (
                <tr key={idx} className="text-sm hover:bg-gray-50">
                  <td className="px-3 py-4 font-medium text-gray-800">
                    {row.name}
                  </td>
                  <td className="px-3 py-4 text-gray-600">{row.status}</td>
                  <td className="px-4 py-3">
                    <button className="text-gray-500 hover:text-gray-700">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
          <button
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-1 hover:bg-gray-50 disabled:opacity-50"
          >
            <IoArrowBackOutline /> Previous
          </button>
          <div className="flex items-center gap-4">
            <span>Page {page} of 10</span>
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
              className="border border-gray-300 rounded-lg px-2 py-1 text-sm"
            >
              {[10, 24, 50].map((num) => (
                <option key={num} value={num}>
                  {num} per page
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === 10}
            className="flex items-center gap-1 border border-[#CDD5DF] rounded-lg px-3 py-1 hover:bg-gray-50 disabled:opacity-50"
          >
            Next <IoArrowForward />
          </button>
        </div>
      </div>
    </>
  );
}
```

### Step 3: `tabRegistry.tsx` me register karo

```typescript
import NewTabTab from "./NewTabTab";

export const tabComponents: Record<
  string,
  React.ComponentType<TabComponentProps>
> = {
  // ... existing tabs
  newTab: NewTabTab,  // ← Yahan add karo
};

export const tabTitles: Record<string, string> = {
  // ... existing tabs
  newTab: "New Tab",  // ← Title add karo
};
```

### Step 4: `manageData.ts` me tabs array me add karo

```typescript
export const tabs: TabItem[] = [
  // ... existing tabs
  { id: "newTab", label: "New Tab" },  // ← Yahan add karo
];
```

## Special Tabs (Categories jaisa)

Agar tumhara tab table-based nahi hai (jaise Categories), to:

1. Component me `stats` prop hi use karo (no `data`, `page`, etc.)
2. `specialTabs` me register karo:

```typescript
export const specialTabs: Record<string, React.ComponentType<any>> = {
  categories: CategoriesTab,
  newSpecialTab: NewSpecialTab,  // ← Yahan add karo
};
```

## Benefits

✅ **Clean Code**: Har tab apni file me isolated  
✅ **Easy to Add**: Naye tabs add karna bahut simple  
✅ **Maintainable**: Har tab ka code alag, debugging easy  
✅ **Scalable**: Kitne bhi tabs add kar sakte ho bina complexity ke  
✅ **UI Same**: Sab tabs consistent UI use karte hain

## Example: System Settings Tab Add Karna

1. `manageData.ts` me:
   - `statsData.system` add karo
   - `tableData.system` add karo (agar table chahiye)
   - Type define karo

2. `tabs/SystemTab.tsx` banao (UsersTab.tsx copy karke modify karo)

3. `tabRegistry.tsx` me:
   - `tabComponents.system = SystemTab` add karo
   - `tabTitles.system = "System Settings"` add karo

4. Done! 🎉

