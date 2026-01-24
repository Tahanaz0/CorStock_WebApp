"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import viewIcon from "@/app/assets/images/viewIcon.png";
import editIcon from "@/app/assets/images/editIcon.png";
import deleteIcon from "@/app/assets/images/deleteIcon.png";
import adjustIcon from "@/app/assets/images/adjustIcon.png";

const ActionMenuOrganization: React.FC<{
  orgId?: string;
  orgName?: string;
  orgStatus?: string;
  onDelete?: (name: string) => void;
  onOpenEdit?: (name: string, status: string, id: string) => void;
}> = ({ orgId, orgName, orgStatus = "Active", onOpenEdit }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  //   const dispatch = useDispatch<AppDispatch>();

  const handleView = () => {
    setAnchorEl(null);
    if (orgId) {
      router.push(`/organization/${orgId}`);
    } else if (orgName) {
      router.push(`/organization/${encodeURIComponent(orgName)}`);
    }
  };

  const handleEdit = () => {
    setAnchorEl(null);
    if (orgName && onOpenEdit && orgId) {
      onOpenEdit(orgName, orgStatus, orgId);
    }
  };

  // const handleAdjust = () => {
  //   setAnchorEl(null);
  //   // setIsAdjustModalOpen(true);
  // };

  // const handleDeleteClick = () => {
  //   setAnchorEl(null);
  //   // TODO: Implement delete functionality
  // };

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{ display: "flex" }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        disableScrollLock={true}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            color: "#697586",
          },
        }}
      >
        <MenuItem onClick={handleView}>
          <Image src={viewIcon} alt="view icon" className="mr-3" />
          <span>View</span>
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <Image src={editIcon} alt="edit icon" className="mr-3" />
          <span>Edit</span>
        </MenuItem>
        <MenuItem>
          <Image src={adjustIcon} alt="adjust icon" className="mr-3" />
          <span>Adjust</span>
        </MenuItem>
        <MenuItem>
          <Image src={deleteIcon} alt="delete Icon" className="mr-3" />
          <span>Delete</span>
        </MenuItem>
      </Menu>

      {/* Adjust Modal (Change Licence Seats) */}
      {/* {orgId && (
        <ChangeLicenceSeats
          isOpen={isAdjustModalOpen}
          onClose={() => setIsAdjustModalOpen(false)}
          organizationId={orgId}
          seatsTotal={seatsTotal ?? 30}
          seatsUsed={seatsUsed ?? 24}
        />
      )} */}

      {/* Delete Confirmation Modal */}
      {/* <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Organization"
        message="Are you sure you want to delete this organization"
        itemName={orgName}
        loading={isDeleting}
      /> */}
    </>
  );
};

export { ActionMenuOrganization };
