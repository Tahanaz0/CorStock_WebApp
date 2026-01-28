import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "@/app/types/auth-reducer-type";

interface AuthState {
  isAuthenticated: boolean;
  loginData: AuthResponse | null;
  requestPassEmail: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loginData: null,
  requestPassEmail: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<AuthResponse>) => {
      state.isAuthenticated = true;
      state.loginData = action.payload;
      state.loading = false;
      state.error = null;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.loginData = null;
      state.loading = false;
      state.error = null;
    },
    requestPassEmail: (state, action: PayloadAction<string>) => {
      state.requestPassEmail = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginUser,
  requestPassEmail,
  logoutUser,
  setLoading,
  setError,
  clearError,
} = authSlice.actions;

// Aliases for compatibility with existing code
export const LOGIN_USER = loginUser;
export const REQUEST_PASS_EMAIL = requestPassEmail;
export const LOG_OUT_USER = logoutUser;
export const SET_LOADING = setLoading;
export const SET_ERROR = setError;
export const CLEAR_ERROR = clearError;

export default authSlice.reducer;
