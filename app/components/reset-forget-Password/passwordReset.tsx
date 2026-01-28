"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Button, Stack, PasswordInput } from "@mantine/core";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "@/redux/actions/auth-action/auth-action";
import { RootState } from "../../../redux/store";

interface resetPasswordDataType {
  email: string;
  otp: string;
  newPassword: string;
}

const PasswordReset = ({ otp }: { otp: string }) => {
  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const getEmailRedux: string | null = useSelector(
    (state: RootState) => state.auth.requestPassEmail,
  );
  const loading = useSelector((state: RootState) => state.auth.loading);

  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const passwordSchema = z
    .object({
      newPassword: z
        .string()
        .min(6, "New password must be at least 6 characters"),
      confirmPassword: z.string().min(6),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "New password and confirm password do not match",
      path: ["confirmPassword"],
    });

  const handlePassword = async () => {
    const parsed = passwordSchema.safeParse({
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    });

    if (!parsed.success) {
      const error = parsed.error.flatten().fieldErrors;

      if (error.newPassword) toast.error(error.newPassword[0]);
      else if (error.confirmPassword) toast.error(error.confirmPassword[0]);
      return;
    }
    const resetPasswordData: resetPasswordDataType = {
      email: `${getEmailRedux}`,
      otp: `${otp}`,
      newPassword: parsed.data.confirmPassword,
    };

    try {
      await dispatch(resetPassword(resetPasswordData));
      toast.success("Password reset link sent to your email!");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong to sent OTP");
    }
  };

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full satoshi-font">
      {/* Password input form */}
      <Stack gap="md">
        <PasswordInput
          label="New Password"
          placeholder="Enter Password"
          autoFocus
          value={values.newPassword}
          onChange={(e) => handleChange("newPassword", e.target.value)}
          styles={{
            label: { color: "#364152", fontWeight: "500" },
          }}
          size="sm"
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Enter Password"
          value={values.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          styles={{
            label: { color: "#364152", fontWeight: "500" },
          }}
          size="sm"
        />

        <Button
          onClick={handlePassword}
          fullWidth
          size="sm"
          loading={loading}
          disabled={loading}
          style={{
            backgroundColor: "#FF8A3D",
            color: "black",
            borderRadius: "8px",
          }}
          className="text-orange-400 font-medium manrope-font responsive-button"
        >
          Update
        </Button>
      </Stack>
    </div>
  );
};

export default PasswordReset;
