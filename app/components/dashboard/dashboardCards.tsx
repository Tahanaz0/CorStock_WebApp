"use client";

import React, { useState, memo } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png";
import card3 from "../../assets/images/card-3.png";
import card4 from "../../assets/images/card-4.png";
import card5 from "../../assets/images/card-5.png";
import card6 from "../../assets/images/card-6.png";
import { Select } from "@mantine/core";

const DashboardCards = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleChange = (value: string | null) => {
    console.log("Selected value:", value);
  };

  const cardsData = [
    {
      id: 1,
      title: "Total Stock Value",
      description: "£1,264,550",
      marketPercent: (
        <Select
          size="xs"
          radius={10}
          defaultValue="All Sites"
          data={["All Sites", "Site 1", "Site 2", "Site 3"]}
          style={{ width: 120 }}
          comboboxProps={{ withinPortal: true, zIndex: 1000 }}
          onChange={handleChange}
        />
      ),
      percentChange: "28.4%",
      isIncrease: true,
      icon: card1,
    },
    {
      id: 2,
      title: "Outstanding POs",
      description: "58",
      marketPercent: "Updated 10:45 AM",
      percentChange: "28.4%",
      isIncrease: true,
      icon: card2,
    },
    {
      id: 3,
      title: "Low Stock Items",
      description: "46",
      marketPercent: "Updated 10:45 AM",
      percentChange: "28.4%",
      isIncrease: false,
      icon: card3,
    },
    {
      id: 4,
      title: "Recent Movements",
      description: "456",
      marketPercent: (
        <Select
          size="xs"
          radius={10}
          defaultValue="7 Days"
          data={["7 Days", "30 Days", "This Month"]}
          style={{ width: 120 }}
          comboboxProps={{ withinPortal: true, zIndex: 1000 }}
          onChange={handleChange}
        />
      ),
      percentChange: "28.4%",
      isIncrease: true,
      icon: card4,
    },
    {
      id: 5,
      title: "Fast Movers",
      description: "HYD-HOSE-12",
      marketPercent: (
        <Select
          size="xs"
          radius={10}
          defaultValue="Top 10"
          data={["Top 10", "Top 20", "Top 30"]}
          style={{ width: 120 }}
          comboboxProps={{ withinPortal: true, zIndex: 1000 }}
          onChange={handleChange}
        />
      ),
      percentChange: "28.4%",
      isIncrease: true,
      icon: card5,
    },
    {
      id: 6,
      title: "Deliveries",
      description: (
        <ul className="flex gap-8 -mt-1">
          <li>
            <p className="text-[#FE6511] font-medium text-[12px]">Due</p>
            <p>16</p>
          </li>
          <li>
            <p className="text-[#FE6511] font-medium text-[12px]">Overdue</p>
            <p>5</p>
          </li>
        </ul>
      ),
      marketPercent: (
        <Select
          size="xs"
          radius={10}
          defaultValue="7 Days"
          data={["7 Days", "30 Days", "This Month"]}
          style={{ width: 100 }}
        />
      ),
      percentChange: "28.4%",
      isIncrease: true,
      icon: card6,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
        gap: 2,
        fontFamily: "satoshi",
      }}
    >
      {cardsData.map((card, index) => (
        <Card
          key={card.id}
          style={{
            borderRadius: "16px",
            border: "1px solid #F1F5F9",
            transition: "all 0.3s ease",
          }}
          elevation={0}
          sx={{
            "&:hover": {
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transform: "translateY(-2px)",
              borderColor: "#E2E8F0",
            },
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&.Mui-focusVisible": {
                backgroundColor: "transparent",
              },
            }}
          >
            <CardContent sx={{ p: 2.5, height: "100%", fontFamily: "inherit" }}>
              <Typography
                component="div"
                fontSize={14}
                fontWeight={500}
                color="#697586"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: -1,
                  mb: 1,
                }}
              >
                {card.title}
                <Box
                  sx={{
                    borderRadius: "6px",
                    backgroundColor: "#F8FAFC",
                  }}
                >
                  <Image src={card.icon} alt="icon" />
                </Box>
              </Typography>
              <Box
                sx={{
                  color: "black",
                  fontWeight: 700,
                  fontSize: 20,
                  height: "50px",
                  fontFamily: "manrope",
                }}
              >
                {card.description}
              </Box>
              <div className="flex justify-between">
                <Typography component="div" fontSize={11} fontWeight={500} color="#697586">
                  {card.marketPercent}
                </Typography>

                <Typography
                  fontSize={11}
                  fontWeight={600}
                  color={card.isIncrease ? "#16B364" : "#F04438"}
                >
                  {card.isIncrease ? "+" : "-"}
                  {card.percentChange}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default memo(DashboardCards);
