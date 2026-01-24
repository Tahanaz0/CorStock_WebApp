"use client";

import { TextInput, Button, Text, Anchor } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

/* ---------------- Zod Schema ---------------- */
const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

type OtpFormType = z.infer<typeof otpSchema>;

const VerificationCodeForm = () => {
  const [timeLeft, setTimeLeft] = useState(30);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OtpFormType>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const otpValue = watch("otp") || "";

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  /* ---------------- OTP CHANGE ---------------- */
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const otpArray = otpValue.split("");
    otpArray[index] = value;

    const updatedOtp = otpArray.join("").slice(0, 6);
    setValue("otp", updatedOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  /* ---------------- SUBMIT ---------------- */
  const onSubmit = (data: OtpFormType) => {
    console.log("Submitted OTP:", data.otp);

    if (data.otp === "123456") {
      toast.success("OTP verified successfully!");
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-144.5 flex flex-col gap-3 text-center px-4 sm:px-0 overflow-x-hidden">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* OTP INPUTS */}
        <div className="flex justify-center gap-2 sm:gap-3 my-5 overflow-x-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <React.Fragment key={index}>
              <TextInput
                id={`otp-${index}`}
                value={otpValue[index] || ""}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                maxLength={1}
                autoComplete="one-time-code"
                placeholder="0"
                styles={{
                  input: {
                    width: 50,
                    height: 50,
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: 600,
                    fontFamily: "Manrope, sans-serif",
                    borderRadius: 8,
                    border: "1px solid #FF8A3D",
                    color: "#FF8A3D",
                    padding: 0,
                  },
                }}
              />

              {/* DASH — UI SAME, WIDTH REMOVED */}
              {index === 2 && (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "#adb5bd",
                  }}
                >
                  -
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {errors.otp && (
          <Text className="text-red-500 text-sm mb-2">
            {errors.otp.message}
          </Text>
        )}

        <Button
          type="submit"
          styles={{
            root: {
              width: "100%",
              height: 40,
              borderRadius: 8,
              border: "1px solid #FF8A3D",
              backgroundColor: "#FF8A3D",
              color: "black",
              fontWeight: 600,
            },
          }}
        >
          Verify OTP
        </Button>
      </form>

      {/* RESEND OTP */}
      <div className="flex justify-center mt-3">
        <Text size="sm" color="#697586" fw={600}>
          Didn&apos;t receive the email?
          {timeLeft > 0 ? (
            <Text component="span" color="#FF8A3D" fw={600} ml={4}>
              {timeLeft}s
            </Text>
          ) : (
            <Anchor
              component="button"
              ml={4}
              fw={600}
              color="#FF8A3D"
              onClick={() => {
                setTimeLeft(30);
              }}
            >
              Resend OTP
            </Anchor>
          )}
        </Text>
      </div>
    </div>
  );
};

export default VerificationCodeForm;
