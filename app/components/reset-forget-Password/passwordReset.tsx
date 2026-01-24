// Note: This is Reset Your password component with password inputs...!

"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Button, SimpleGrid, PasswordInput } from "@mantine/core";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const PasswordReset = () => {
  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const router = useRouter();

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

  const handlePassword = () => {
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

    toast.success("Password updated successfully!");
    setTimeout(() => router.push("/"), 1500);
  };

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 mt-40 md:mt-0 satoshi-font">
      {/* Heading */}
      <div className="mb-8 text-left">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2 manrope-font">
          Password Reset
        </h1>
        <p className="text-[#697586] text-base">Enter your new password.</p>
      </div>

      {/* Password input form */}
      <div className="space-y-4">
        <SimpleGrid cols={{ sm: 1 }} spacing="md">
          <PasswordInput
            label="New Password"
            placeholder="Enter Password"
            autoFocus
            value={values.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            styles={{ label: { color: "#364152" } }}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Enter Password"
            value={values.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            styles={{ label: { color: "#364152" } }}
          />
        </SimpleGrid>

        <Button
          onClick={handlePassword}
          // loading={loading}
          // disabled={loading}
          fullWidth
          style={{
            backgroundColor: "#FF8A3D",
            color: "black",
            borderRadius: "8px",
          }}
          className="text-orange-400 font-medium manrope-font"
        >
          Update
          {/* {loading ? "Logging in..." : "Login"} */}
        </Button>
      </div>
    </div>
  );
};

export default PasswordReset;
