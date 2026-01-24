"use client";

import React from "react";
import {
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Passwords must be at least 6 characters"),
  remember: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

// ----------------- LoginForm Component -----------------
const LoginForm = () => {
  const router = useRouter();

  const form = useForm<LoginSchemaType>({
    initialValues: { email: "", password: "", remember: false },
    validate: (values) => {
      const result = loginSchema.safeParse(values);

      if (!result.success) {
        const errors = {
          email: result.error.flatten().fieldErrors.email?.[0],
          password: result.error.flatten().fieldErrors.password?.[0],
        };

        if (errors.email) toast.error(errors.email);
        else if (errors.password) toast.error(errors.password);

        return errors;
      }

      return {};
    },
  });

  const handleLogin = (values: LoginSchemaType) => {
    localStorage.setItem(
      "userData",
      JSON.stringify({ email: values.email, password: values.password }),
    );

    console.log("Login values:", values);
    toast.success("Login Successfully");
    // The actual login logic would go here.
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <Stack mx="auto" className="w-full">
      <form onSubmit={form.onSubmit(handleLogin)}>
        <Stack>
          <TextInput
            label="Email"
            autoFocus
            placeholder="Enter Email Address"
            {...form.getInputProps("email")}
            style={{ color: "#364152", fontWeight: "500" }}
            // disabled={loading}
          />
          <PasswordInput
            label="Password"
            placeholder="Enter Password"
            {...form.getInputProps("password")}
            style={{ color: "#364152", fontWeight: "500" }}
            // disabled={loading}
          />

          <div className="flex items-center justify-between">
            <div>
              <Checkbox
                label="Remember Me"
                {...form.getInputProps("remember", { type: "checkbox" })}
                iconColor="#EF4B07"
                styles={{
                  label: {
                    color: "#697586",
                    fontWeight: 500,
                  },
                  input: {
                    backgroundColor: "#FFF6ED",
                    borderColor: "#EF4B07",
                  },
                }}
              />
            </div>

            <div>
              <Link
                href={"/resetPassword"}
                className="text-orange-400 font-medium"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="manrope-font"
            fullWidth
            // loading={loading}
            // disabled={loading}
            style={{
              backgroundColor: "#FF8A3D",
              color: "black",
              borderRadius: "8px",
            }}
          >
            Login
            {/* {loading ? "Logging in..." : "Login"} */}
          </Button>

          <div className="flex items-center justify-center">
            <p className="text-gray-500 font-medium ">
              Didn&apos;t have an account?&nbsp;
            </p>
            <Link href={"/signup"} className="text-orange-400 font-medium">
              SignUp
            </Link>
          </div>
        </Stack>
      </form>
    </Stack>
  );
};

export default LoginForm;
