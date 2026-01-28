/* ---------------- ROUTE DEFINITIONS ---------------- */

/**
 * Public routes accessible without authentication
 */
const publicRoutes = [
  "/signup",
  "/login",
  "/resetPassword",
  "/verifyemail",
  "/forgotPassword",
];

/**
 * Protected routes requiring authentication
 * Note: Dynamic routes like /organization/[id] are handled via regex in PathChecker
 */ const protectedRoutes = [
  "/",
  "/inventory",
  "/procurement",
  "/labels&qr",
  "/reports",
  "/manage",
  "/notifications",
  "/myprofile",
];

export { publicRoutes, protectedRoutes };
