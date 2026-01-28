import { AppDispatch } from "@/redux/store";
import {
  setUserData,
  setUserLoading,
  setUserError,
} from "@/redux/reducers/user-reducer/user-reducer";
import { protectedApi } from "@/app/api/axios";
import axios from "axios";

/**
 * Server-side Redux Thunk
 * req, res pass karna zaruri hai taake server-side cookies read ho sake
 */
export const fetchUserData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setUserLoading(true));
    dispatch(setUserError(null));

    const response = await protectedApi.get("/auth/me");

    const userData = response.data;

    // Map profilePhotoUrl to profileImage if backend returns profilePhotoUrl
    if (userData.profilePhotoUrl && !userData.profileImage) {
      userData.profileImage = userData.profilePhotoUrl;
    }

    dispatch(setUserData(userData));
  } catch (error: unknown) {
    let message = "Failed to fetch user data";

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    }

    dispatch(setUserError(message));
  } finally {
    dispatch(setUserLoading(false));
  }
};
