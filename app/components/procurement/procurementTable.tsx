"use client";

import * as React from "react";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  TablePagination,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { toast } from "react-toastify";
import inventoryData from "../../data/hardcoded/inventoryData";
import { ActionMenuOrganization } from "../actionMenu/actionMenu";
// import EditOrganization from "../../modals/editOrganization";
import styles from "./procurementTable.module.css";

/* ---------------- MAIN TABLE ---------------- */

interface ProcurementTableProps {
  searchQuery: string;
  statusFilter?: string | null;
  expiryFilter?: string | null;
  sortBy?: string | null;
  showExpiring30Days?: boolean;
}

const InventoryTable = ({
  searchQuery,
  statusFilter,
  expiryFilter,
  sortBy,
  showExpiring30Days,
}: ProcurementTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(inventoryData);
  //   const [editOrgName, setEditOrgName] = useState("");
  //   const [editOrgStatus, setEditOrgStatus] = useState("");
  //   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  //   const handleOpenEdit = (name: string, status: string) => {
  //     setEditOrgName(name);
  //     setEditOrgStatus(status);
  //     setIsEditModalOpen(true);
  //   };

  //   const handleCloseEdit = () => {
  //     setIsEditModalOpen(false);
  //     setEditOrgName("");
  //     setEditOrgStatus("");
  //   };

  const getBillingStatusClass = (status: string) => {
    switch (status) {
      case "Paid":
        return styles.paid;
      case "Pending":
        return styles.pending;
      case "Unpaid":
        return styles.unpaid;
      case "Critical":
        return styles.critical;
      case "Suspended":
        return styles.suspended;
      case "Overstock":
        return styles.overstock;
      default:
        return "";
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return styles.active;
      case "Trial":
        return styles.trial;
      case "Expired":
        return styles.expired;
      case "Suspended":
        return styles.suspendedStatus;
      default:
        return "";
    }
  };

  const filteredRows = rows
    .filter((row) => {
      // Search filter
      const matchesSearch = row.Organization.toLowerCase().includes(searchQuery.toLowerCase());

      // Status filter
      const matchesStatus = !statusFilter || row.status === statusFilter;

      // Expiry filter (simplified, assuming expiryFilter is a string like "Next 30 days")
      let matchesExpiry = true;
      if (expiryFilter) {
        // For now, just check if expiryFilter is set, implement date logic later if needed
        matchesExpiry = true; // Placeholder
      }

      // Expiring 30 days filter
      let matchesExpiring30Days = true;
      if (showExpiring30Days) {
        // Calculate if expiryDate is within 30 days
        const expiryDate = new Date(row.expiryDate);
        const now = new Date();
        const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
        matchesExpiring30Days = expiryDate <= thirtyDaysFromNow && expiryDate >= now;
      }

      return matchesSearch && matchesStatus && matchesExpiry && matchesExpiring30Days;
    })
    .sort((a, b) => {
      if (!sortBy) return 0;

      switch (sortBy) {
        case "Name A-Z":
          return a.Organization.localeCompare(b.Organization);
        case "Name Z-A":
          return b.Organization.localeCompare(a.Organization);
        case "Seats Used %":
          return a.usedPercentage - b.usedPercentage;
        case "Renewal date":
          return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
        case "Created date":
          return new Date(a.created).getTime() - new Date(b.created).getTime();
        default:
          return 0;
      }
    });

  const handleDelete = (orgName: string) => {
    setRows(rows.filter((row) => row.Organization !== orgName));
  };

  return (
    <>
      <Paper className={styles.paper}>
        {/* TABLE */}
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {[
                  "Organization",
                  "Status",
                  "Seats",
                  "% Used",
                  "Expiry Date",
                  "Billing Status",
                  "Created",
                  "Action",
                ].map((head) => (
                  <TableCell
                    key={head}
                    sx={{
                      color: "#697586",
                      backgroundColor: "#f8fafc",
                      fontWeight: "500",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow hover key={i}>
                    <TableCell>{row.Organization}</TableCell>
                    <TableCell>
                      <Box
                        className={`${styles.statusBadge} ${getStatusClass(
                          row.status,
                        )}`}
                      >
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell>{row.seatsUsed}</TableCell>
                    <TableCell>{row.used}</TableCell>
                    <TableCell>{row.expiryDate}</TableCell>

                    {/* STATUS BADGE */}
                    <TableCell>
                      <Box
                        className={`${styles.statusBadge} ${getBillingStatusClass(
                          row.billingStatus,
                        )}`}
                      >
                        {row.billingStatus}
                      </Box>
                    </TableCell>
                    <TableCell>{row.created}</TableCell>
                    <TableCell align="center">
                      <ActionMenuOrganization
                        orgName={row.Organization}
                        orgStatus={row.status}
                        onDelete={handleDelete}
                        // onOpenEdit={handleOpenEdit}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* PAGINATION */}
        <Box
          className={styles.pagination}
          style={{ justifyContent: isSmallScreen ? "center" : "space-between" }}
        >
          {!isSmallScreen && (
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className={styles.paginationButton}
            >
              <ArrowBackIcon fontSize="small" /> Previous
            </button>
          )}

          <TablePagination
            component="div"
            count={filteredRows.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={(_, newPage) => setPage(newPage)}
            rowsPerPageOptions={[10, 15, 25]}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
          />

          {!isSmallScreen && (
            <button
              disabled={
                page >= Math.ceil(filteredRows.length / rowsPerPage) - 1
              }
              onClick={() => setPage(page + 1)}
              className={styles.paginationButton}
            >
              Next <ArrowForwardIcon fontSize="small" />
            </button>
          )}
        </Box>

        {/* Edit Organization Modal */}
        {/* <EditOrganization
          isOpen={isEditModalOpen}
          onClose={handleCloseEdit}
          orgName={editOrgName}
          orgStatus={editOrgStatus}
        /> */}
      </Paper>
    </>
  );
};

export default InventoryTable;
