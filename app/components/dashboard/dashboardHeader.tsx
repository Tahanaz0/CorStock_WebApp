"use client";

import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import DashboardActionButtons from "./dashboardActionButtons";
import styles from "./dashboardHeader.module.css";

const DashboardHeader = () => {
  //   const userData = useSelector((state: RootState) => state.user.userData);

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  //   const userName = (userData?.name as string) || "User";
  const userName = "Ali";

  return (
    <section className={styles.header}>
      {/* Date */}
      <div className={styles.date}>{formattedDate}</div>

      {/* Greeting and buttons */}
      <div className={styles.greetingContainer}>
        {/* Greeting */}
        <div className={styles.greeting}>
          {(() => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) return `Good Morning, ${userName} 👋`;
            if (hour >= 12 && hour < 17)
              return `Good Afternoon, ${userName} 👋`;
            if (hour >= 17 && hour < 21) return `Good Evening, ${userName} 👋`;
            return `Good Night, ${userName} 🌙`;
          })()}
        </div>

        {/* Action Buttons */}
        {/* <DashboardActionButtons /> */}
      </div>
    </section>
  );
};

export default DashboardHeader;
