import React from "react";

const createProgress = (percentage: number) => (
  <div className="flex items-center">
    <div className="w-20 h-2 bg-[#FFE5CC] rounded-full overflow-hidden">
      <div
        className="h-full bg-[#FE6511] rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <div className="text-xs ml-2">{percentage}%</div>
  </div>
);

const calculatePercentage = (seatsUsed: string): number => {
  const [used, total] = seatsUsed.split('/').map(Number);
  return total === 0 ? 0 : Math.round((used / total) * 100);
};

export interface inventoryDataType {
  Organization: string;
  status: "Active" | "Trial" | "Expired" | "Suspended";
  seatsUsed: string;
  expiryDate: string;
  billingStatus:
    | "Paid"
    | "Pending"
    | "Unpaid"
    | "Suspended"
    | "Critical"
    | "Overstock";
  created: string;
  used: React.ReactNode;
  usedPercentage: number;
}

const inventoryData: inventoryDataType[] = [
  { Organization: "ABC Infrastructure Ltd", status: "Active", seatsUsed: "24/30", expiryDate: "14 Nov 2025", used: createProgress(calculatePercentage("24/30")), usedPercentage: calculatePercentage("24/30"), billingStatus: "Paid", created: "31 Dec 2025" },
  { Organization: "NovaTech Solutions", status: "Trial", seatsUsed: "45/50", expiryDate: "28 Oct 2025", used: createProgress(calculatePercentage("45/50")), usedPercentage: calculatePercentage("45/50"), billingStatus: "Overstock", created: "31 Dec 2025" },
  { Organization: "BluePeak Engineering", status: "Expired", seatsUsed: "8/10", expiryDate: "15 Sep 2025", used: createProgress(calculatePercentage("8/10")), usedPercentage: calculatePercentage("8/10"), billingStatus: "Unpaid", created: "31 Dec 2025" },
  { Organization: "UrbanStack Enterprises", status: "Suspended", seatsUsed: "12/20", expiryDate: "22 Aug 2025", used: createProgress(calculatePercentage("12/20")), usedPercentage: calculatePercentage("12/20"), billingStatus: "Critical", created: "31 Dec 2025" },
  { Organization: "Cornerstone Ltd", status: "Active", seatsUsed: "18/25", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("18/25")), usedPercentage: calculatePercentage("18/25"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Vertex Systems", status: "Active", seatsUsed: "10/20", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("10/20")), usedPercentage: calculatePercentage("10/20"), billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "OmniBuild Co", status: "Active", seatsUsed: "7/10", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("7/10")), usedPercentage: calculatePercentage("7/10"), billingStatus: "Unpaid", created: "01 May 2024" },
  { Organization: "GreenField Works", status: "Active", seatsUsed: "15/30", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("15/30")), usedPercentage: calculatePercentage("15/30"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Summit Logistics", status: "Active", seatsUsed: "9/15", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("9/15")), usedPercentage: calculatePercentage("9/15"), billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "Pioneer Holdings", status: "Active", seatsUsed: "20/30", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("20/30")), usedPercentage: calculatePercentage("20/30"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Apex Manufacturing", status: "Active", seatsUsed: "11/20", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("11/20")), usedPercentage: calculatePercentage("11/20"), billingStatus: "Unpaid", created: "01 May 2024" },
  { Organization: "NorthStar Solutions", status: "Active", seatsUsed: "14/20", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("14/20")), usedPercentage: calculatePercentage("14/20"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Silverline Corp", status: "Active", seatsUsed: "6/10", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("6/10")), usedPercentage: calculatePercentage("6/10"), billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "MetroWorks", status: "Active", seatsUsed: "13/25", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("13/25")), usedPercentage: calculatePercentage("13/25"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Blue Harbor", status: "Trial", seatsUsed: "3/5", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("3/5")), usedPercentage: calculatePercentage("3/5"), billingStatus: "Unpaid", created: "01 May 2024" },
  { Organization: "Cobalt Energy", status: "Active", seatsUsed: "22/30", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("22/30")), usedPercentage: calculatePercentage("22/30"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Atlas Group", status: "Active", seatsUsed: "5/10", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("5/10")), usedPercentage: calculatePercentage("5/10"), billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "HarborTech", status: "Active", seatsUsed: "17/20", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("17/20")), usedPercentage: calculatePercentage("17/20"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Lumen Works", status: "Active", seatsUsed: "8/15", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("8/15")), usedPercentage: calculatePercentage("8/15"), billingStatus: "Unpaid", created: "01 May 2024" },
  { Organization: "Brightside", status: "Suspended", seatsUsed: "0/10", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("0/10")), usedPercentage: calculatePercentage("0/10"), billingStatus: "Critical", created: "01 May 2024" },
  { Organization: "CivicBuild", status: "Active", seatsUsed: "16/20", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("16/20")), usedPercentage: calculatePercentage("16/20"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Blue Ridge", status: "Active", seatsUsed: "19/25", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("19/25")), usedPercentage: calculatePercentage("19/25"), billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Skyline Partners", status: "Trial", seatsUsed: "2/5", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("2/5")), usedPercentage: calculatePercentage("2/5"), billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "Harbour Industries", status: "Expired", seatsUsed: "0/0", expiryDate: "01 Dec 2025", used: createProgress(calculatePercentage("0/0")), usedPercentage: calculatePercentage("0/0"), billingStatus: "Unpaid", created: "01 May 2024" },
];

export default inventoryData;