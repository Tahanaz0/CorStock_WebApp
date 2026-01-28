"use client";
import { TextInput, Button, Text, Anchor, Stack } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { RootState } from "../../../redux/store";
import {
  requestPasswordReset,
  verifyOtpPass,
} from "@/redux/actions/auth-action/auth-action";

interface verifyOtpPassType {
  email: string;
  otp: string;
}

/* ---------------- Zod Schema ---------------- */
const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

type OtpFormType = z.infer<typeof otpSchema>;

const VerificationCodeForm = () => {
  const getEmailRedux: string | null = useSelector(
    (state: RootState) => state.auth.requestPassEmail,
  );
  const loading = useSelector((state: RootState) => state.auth.loading);

  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

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
  const onSubmit = async (data: OtpFormType) => {
    const paramsData: verifyOtpPassType = {
      email: `${getEmailRedux}`,
      otp: data.otp,
    };

    try {
      await dispatch(verifyOtpPass(paramsData));
      toast.success("OTP Verified!");
      setTimeout(() => {
        router.push(`/forgotPassword/${paramsData.otp}`);
      }, 1000);
    } catch (error) {
      console.log("Error to check otp", error);
      toast.error("Wrong OTP");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      <Stack gap="lg" mt={{ base: "xl", sm: 0 }}>
        {/* OTP INPUTS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(6px, 2vw, 12px)",
            flexWrap: "nowrap",
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <React.Fragment key={index}>
              <TextInput
                id={`otp-${index}`}
                value={otpValue[index] || ""}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                maxLength={1}
                autoComplete="one-time-code"
                autoFocus
                placeholder="0"
                styles={{
                  input: {
                    width: "clamp(40px, 10vw, 60px)",
                    height: "clamp(40px, 10vw, 60px)",
                    textAlign: "center",
                    fontSize: "clamp(18px, 5vw, 40px)",
                    fontWeight: 600,
                    fontFamily: "Manrope, sans-serif",
                    borderRadius: 8,
                    border: "2px solid #FF8A3D",
                    color: "#FF8A3D",
                    padding: 0,
                  },
                }}
              />
              {/* DASH */}
              {index === 2 && (
                <Text
                  style={{
                    fontSize: "clamp(18px, 5vw, 24px)",
                    fontWeight: 600,
                    color: "gray",
                    flexShrink: 0,
                  }}
                >
                  -
                </Text>
              )}
            </React.Fragment>
          ))}
        </div>

        {errors.otp && (
          <Text c="red" size="sm" ta="center">
            {errors.otp.message}
          </Text>
        )}

        <Button
          type="submit"
          fullWidth
          styles={{
            root: {
              backgroundColor: "#FF8A3D",
              borderRadius: 8,
              height: 48,
              fontSize: 16,
              fontWeight: 600,
            },
          }}
          loading={loading}
          disabled={loading}
        >
          Verify OTP
        </Button>

        {/* RESEND OTP */}
        <Text size="sm" ta="center" c="dimmed">
          Didn&apos;t receive the email?{" "}
          {timeLeft > 0 ? (
            <Text span c="#FF8A3D" fw={600}>
              {timeLeft}s
            </Text>
          ) : (
            <Anchor
              c="#FF8A3D"
              fw={600}
              onClick={async () => {
                try {
                  await dispatch(
                    requestPasswordReset({ email: `${getEmailRedux}` }),
                  );
                  toast.success("OTP sent again!");
                  setTimeLeft(30);
                } catch {
                  toast.error("Failed to resend OTP");
                }
              }}
              style={{ cursor: "pointer" }}
            >
              Resend OTP
            </Anchor>
          )}
        </Text>
      </Stack>
    </form>
  );
};

export default VerificationCodeForm;
