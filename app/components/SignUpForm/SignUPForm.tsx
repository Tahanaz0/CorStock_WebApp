"use client";

import React, { useEffect, useState } from "react";
import {
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Anchor,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { z } from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  signupWithToken,
  verifyInvitation,
} from "@/redux/actions/auth-action/auth-action";
import { useSearchParams } from "next/navigation";

// --------------------------
// Zod schema + Type
// --------------------------
const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  companyName: z.string().min(1, "Company name is required"),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to continue",
  }),
});

export type SignUpFormValues = z.infer<typeof signupSchema>;

// --------------------------
// SignUpForm Component
// --------------------------
const SignUpForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const emailFromParams = searchParams.get("email");

  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);

  const form = useForm<SignUpFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: emailFromParams || "",
      password: "",
      companyName: "",
      agree: false,
    },
    validate: (values) => {
      const result = signupSchema.safeParse(values);

      if (!result.success) {
        const errors = result.error.flatten().fieldErrors;
        const errorValues = Object.values(errors).flat();

        const isAllEmpty =
          !values.firstName &&
          !values.lastName &&
          !values.email &&
          !values.password &&
          !values.companyName;

        if (isAllEmpty) {
          toast.error("Fill All Fields");
        } else if (errorValues.length > 0) {
          toast.error(errorValues[0]);
        }

        return {
          firstName: errors.firstName?.[0],
          lastName: errors.lastName?.[0],
          email: errors.email?.[0],
          password: errors.password?.[0],
          companyName: errors.companyName?.[0],
          agree: errors.agree?.[0],
        };
      }
      return {};
    },
  });

  // Verify invitation on component mount
  useEffect(() => {
    const verifyToken = async () => {
      setVerifying(true);
      try {
        if (!token) {
          toast.error("Invalid invitation link");
          return;
        }

        const res = await dispatch(verifyInvitation(token));
        if (res) toast.success("Invitation verified successfully");
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Invitation verification failed";
        toast.error(errorMessage);
        console.error(err);
      } finally {
        setVerifying(false);
      }
    };

    verifyToken();
  }, [token, dispatch]);

  const handleSubmit = async (values: SignUpFormValues) => {
    if (!token) {
      toast.error("Invalid token. Please try again.");
      return;
    }

    setLoading(true);

    const userData = {
      token: token,
      email: values.email,
      name: `${values.firstName} ${values.lastName}`,
      role: "admin",
      password: values.password,
    };

    try {
      const result = await dispatch(signupWithToken(userData));
      if (result) toast.success("Signup Successfully");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Signup failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  if (verifying) {
    return <div>Verifying invitation...</div>;
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        {/* First + Last Name */}
        <div className="flex gap-4">
          <TextInput
            className="w-full md:w-[50%]"
            label="First Name"
            placeholder="Enter first name"
            autoFocus
            {...form.getInputProps("firstName")}
            styles={{
              label: { color: "#364152", fontWeight: 500 },
              input: { height: 42 },
            }}
          />
          <TextInput
            className="w-full md:w-[50%]"
            label="Last Name"
            placeholder="Enter last name"
            {...form.getInputProps("lastName")}
            styles={{
              label: { color: "#364152", fontWeight: 500 },
              input: { height: 42 },
            }}
          />
        </div>

        {/* Email */}
        <TextInput
          label="Email"
          placeholder="Enter email address"
          type="email"
          disabled
          {...form.getInputProps("email")}
          styles={{ input: { height: 42 } }}
        />

        {/* Company Name */}
        <TextInput
          label="Company Name"
          placeholder="Enter company name"
          {...form.getInputProps("companyName")}
          styles={{ input: { height: 42 } }}
        />

        {/* Password */}
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          {...form.getInputProps("password")}
          styles={{ input: { height: 42 } }}
        />

        {/* Checkbox + Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Checkbox
            {...form.getInputProps("agree", { type: "checkbox" })}
            error={form.errors.agree}
            label={
              <Text size="sm" c="#697586" fw={600}>
                I agree to
              </Text>
            }
            styles={{
              input: {
                borderColor: "#FF8A3D",
                backgroundColor: "transparent",
                outline: "none",
              },
              icon: { color: "#FF8A3D" },
            }}
          />

          <Text size="sm" className="mt-1 sm:mt-0" component="span" fw={500}>
            <Anchor
              component={Link}
              href="/login"
              fw={600}
              c="#FF8A3D"
              className="inline"
            >
              Privacy Policy
            </Anchor>{" "}
            <span className="text-[#697586]">and</span>{" "}
            <Anchor
              component={Link}
              href="/login"
              fw={600}
              c="#FF8A3D"
              className="inline"
            >
              Terms & Conditions
            </Anchor>
          </Text>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          bg="#FF8A3D"
          c="black"
          bdrs="8px"
          className="manrope-font"
          loading={loading}
          disabled={loading || verifying}
        >
          Sign Up
        </Button>

        {/* Already have account */}
        <div className="flex justify-center">
          <Text size="sm" c="#697586" fw={500}>
            Already have an account?{" "}
            <Link href="/login" className="text-[#FF8A3D] font-semibold">
              Login
            </Link>
          </Text>
        </div>
      </Stack>
    </form>
  );
};

export default SignUpForm;
