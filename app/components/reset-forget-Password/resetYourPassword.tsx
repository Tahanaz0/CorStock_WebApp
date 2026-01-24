// Note: This is Reset Your password component with email input...!

"use client";

import React from "react";
import { z } from "zod";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ResetYourPassword = () => {
  const router = useRouter();

  const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
  });

  type LoginSchemaType = z.infer<typeof loginSchema>;

  const form = useForm<LoginSchemaType>({
    initialValues: { email: "" },
    validate: (values) => {
      const result = loginSchema.safeParse(values);

      if (!result.success) {
        const errors = {
          email: result.error.flatten().fieldErrors.email?.[0],
        };
        if (errors.email) toast.error(errors.email);
        return errors;
      }
      return {};
    },
  });

  const handleLogin = (values: LoginSchemaType) => {
    console.log("Login values:", values);
    toast.success("Password reset link sent to your email!");
    // The actual login logic would go here.
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 mt-40 md:mt-0 satoshi-font">
      {/* Heading */}
      <div className="mb-8 text-left">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2 manrope-font">
          Reset Your Password
        </h1>
        <p className="text-[#697586] text-base">
          Enter your email and we will send you a verification email.
        </p>
      </div>

      {/* Email input form */}
      <form onSubmit={form.onSubmit(handleLogin)}>
        <div className="space-y-4">
          <TextInput
            label="Email"
            placeholder="Enter Email Address"
            autoFocus
            {...form.getInputProps("email")}
            styles={{
              label: { color: "#364152", fontWeight: 500 },
            }}
            // disabled={loading}
          />

          <Button
            type="submit"
            // loading={loading}
            // disabled={loading}
            fullWidth
            style={{
              backgroundColor: "#FF8A3D",
              color: "black",
              borderRadius: "8px",
            }}
          >
            Submit
            {/* {loading ? "Logging in..." : "Login"} */}
          </Button>

          <p className="text-sm text-center font-medium text-[#697586]">
            Back to
            <Link href={"/login"} className="text-orange-400 manrope-font">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetYourPassword;
