"use client";

/* ---------------- IMPORTS ---------------- */
import React, {
  ReactNode,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import store from "@/redux/store";
import PathChecker from "./utils/pathChecker";
import { protectedRoutes } from "./utils/routes";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { useLayout } from "./context/layoutContext";
import { fetchUserData } from "@/redux/actions/user-action/user-action";
import { Provider, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

/* ---------------- INTERFACES ---------------- */
interface ClientLayoutProps {
  children: ReactNode;
}

/* ---------------- CONSTANTS ---------------- */
const drawerWidth = 260;
const collapsedWidth = 60;

/* ---------------- COMPONENT ---------------- */
const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isLayoutVisible } = useLayout();

  // Component to initialize Redux-related dispatches
  const ReduxInitializer = () => {
    const dispatch: AppDispatch = useDispatch();
    const pathname = usePathname();

    useEffect(() => {
      const isProtected = protectedRoutes.includes(pathname);

      if (isProtected) {
        // Force fetch user data on page load to ensure fresh profile data
        dispatch(fetchUserData());
      }
    }, [dispatch, pathname]);
    return null; // This component doesn't render anything itself
  };

  // ----- MEDIA QUERY FOR DESKTOP VIEW -----
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // ----- EFFECT TO SET DRAWER STATE BASED ON VIEWPORT -----
  useEffect(() => {
    setDrawerOpen(isDesktop);
  }, [isDesktop]);

  // ----- MEMOIZED CALLBACK FOR DRAWER STATE -----
  const handleSetDrawerOpen = useCallback((value: boolean) => {
    setDrawerOpen(value);
  }, []);

  // ----- DETERMINE IF SIDEBAR SHOULD BE SHOWN (MEMOIZED) -----
  // app/layouts/clientLayout.tsx (Aapki file)
  const showSidebar = useMemo(() => {
    if (!pathname || !isLayoutVisible) return false;
    return (
      protectedRoutes.includes(pathname) ||
      /^\/organization\/[^\/]+$/.test(pathname) || // Org routes
      /^\/add-(user|site|supplier|category|tag|template)$/.test(pathname) || // ✅ ALL add routes
      /^\/manage/.test(pathname) || // ✅ All manage routes
      /^\/user\//.test(pathname) // ✅ All user-related routes
    );
  }, [pathname, isLayoutVisible]);

  // ----- DYNAMIC STYLING FOR THE MAIN CONTENT (MEMOIZED) -----
  const mainStyle: React.CSSProperties = useMemo(
    () => ({
      transition: "margin-left 200ms ease",
      marginLeft: showSidebar
        ? drawerOpen
          ? `${drawerWidth}px`
          : `${collapsedWidth}px`
        : undefined,
      paddingTop: showSidebar ? "70px" : "0",
    }),
    [showSidebar, drawerOpen],
  );

  return (
    <Provider store={store}>
      <>
        <ReduxInitializer /> {/* Render the initializer here */}
        {/* Toast Notification Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* PATH CHECKER (Handles Sidebar/Header Rendering) */}
        {pathname && isLayoutVisible && (
          <PathChecker
            pathName={pathname}
            open={drawerOpen}
            setOpen={handleSetDrawerOpen}
          />
        )}
        {/* MAIN CONTENT */}
        <main style={mainStyle}>{children}</main>
      </>
    </Provider>
  );
};

export default ClientLayout;
