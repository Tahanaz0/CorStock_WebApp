import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/app/types/auth-reducer-type";

interface UserState {
  userData: User | null;
  loading: boolean;
  imageUploading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userData: null,
  loading: false,
  imageUploading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User | null>) => {
      state.userData = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserImage: (state, action: PayloadAction<string>) => {
      if (state.userData) state.userData.profileImage = action.payload;
    },
    setImageUploading: (state, action: PayloadAction<boolean>) => {
      state.imageUploading = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setUserError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.userData = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  setUserData,
  updateUserImage,
  setUserLoading,
  setImageUploading,
  setUserError,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;
