import { setCookie, deleteCookie } from "cookies-next";
import { AuthResponse } from "@/app/types/auth-reducer-type";
import { AppDispatch } from "@/redux/store";
import {
  loginUser,
  logoutUser,
  setLoading,
  setError,
  requestPassEmail,
} from "@/redux/reducers/auth-reducer/auth-reducer";
import api from "@/app/api/axios";
import axios from "axios";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginSchemaType {
  email: string;
}

interface verifyOtpPassType {
  email: string;
  otp: string;
}

interface resetPasswordDataType {
  email: string;
  otp: string;
  newPassword: string;
}

interface SignupWithTokenData {
  token: string;
  email: string;
  name: string;
  role: string;
  password: string;
}

/**
 * Thunk action to login user with email and password
 * Sets token in cookies and updates Redux state
 */
export const loginUserAction =
  (credentials: LoginCredentials) => async (dispatch: AppDispatch) => {
    // In development, skip real backend and use a fake login so you can work without a valid API user
    if (process.env.NODE_ENV === "development") {
      const fakeResponse: AuthResponse = {
        accessToken: "dev-token",
        user: {
          id: "dev-user",
          name: "Developer",
          email: credentials.email,
          role: "admin",
        },
      };

      setCookie("token", fakeResponse.accessToken || "", {
        path: "/",
      });

      dispatch(setLoading(true));
      dispatch(setError(null));
      dispatch(loginUser(fakeResponse));
      dispatch(setLoading(false));

      return fakeResponse;
    }

    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const response = await api.post<AuthResponse>("/auth/login", {
        email: credentials.email,
        password: credentials.password,
      });

      const token = response.data?.accessToken;

      if (!token) {
        throw new Error("Invalid credentials");
      }

      setCookie("token", token, {
        path: "/",
      });

      dispatch(loginUser(response.data));
      dispatch(setLoading(false));

      return response.data;
    } catch (error: unknown) {
      let message = "Failed to login";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      }

      dispatch(setError(message));
      dispatch(setLoading(false)); // Stop loading on error

      // Throw a clean Error so UI can show a user-friendly message
      throw new Error(message);
    }
  };

/**
 * Thunk action to logout user - clear all auth cookies and state
 */
export const logoutUserAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));

    deleteCookie("token", { path: "/" });
    dispatch(logoutUser());
  } catch (error) {
    console.error("[Auth Action] Logout error:", error);
    const message = "Failed to logout";
    dispatch(setError(message));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};

/**
 * Thunk action to Request Password Reset
 */
export const requestPasswordReset =
  (emailVal: LoginSchemaType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const res = await api.post("/auth/forgot-password", {
        email: emailVal.email,
      });

      dispatch(requestPassEmail(emailVal.email));
      return res.data;
    } catch (error: unknown) {
      let message = "Failed to send reset email";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      }

      dispatch(setError(message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

/**
 * Thunk action to Verify OTP to Password Reset
 */
export const verifyOtpPass =
  (data: verifyOtpPassType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const res = await api.post("/auth/verify-reset-otp", data);

      return res.data;
    } catch (error: unknown) {
      let message = "Failed to verify OTP";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      }

      dispatch(setError(message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

/**
 * Thunk action to Verify OTP to Password Reset
 */

export const resetPassword =
  (resetPasswordData: resetPasswordDataType) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const res = await api.post(
        "/auth/reset-password",
        JSON.stringify(resetPasswordData),
      );

      return res.data;
    } catch (error: unknown) {
      let message = "Failed to verify OTP";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      }

      dispatch(setError(message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

/**
 * Thunk action to Verify token
 */
export const verifyInvitation =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const response = await api.post("/auth/verify-invitation", { token });

      dispatch(setLoading(false));
      return response.data;
    } catch (error: unknown) {
      let message = "Failed to verify invitation";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      }

      dispatch(setError(message));
      dispatch(setLoading(false));
      throw error;
    }
  };

/**
 * Thunk action to Signup with token
 */
export const signupWithToken =
  (userData: SignupWithTokenData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const response = await api.post("/auth/register-invitation", userData);

      dispatch(loginUser(response.data));
      dispatch(setLoading(false));

      return response.data;
    } catch (error: unknown) {
      let message = "Failed to signup";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      }

      dispatch(setError(message));
      dispatch(setLoading(false));
      throw error;
    }
  };
