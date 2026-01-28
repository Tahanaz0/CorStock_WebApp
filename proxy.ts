import { NextResponse, NextRequest } from "next/server";
import { publicRoutes } from "./app/utils/routes";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value || null;
  const { pathname } = req.nextUrl;

  // 🔐 6 digit OTP regex
  const forgotPasswordRegex = /^\/forgotPassword\/\d{6}$/;

  // ✅ Signup any route regex
  const signupRegex = /^\/signup\/.*$/;

  const isPublic =
    publicRoutes.includes(pathname) ||
    forgotPasswordRegex.test(pathname) ||
    signupRegex.test(pathname);

  // ❌ logged-in user public pages par na jaye
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ❌ non-logged-in user protected pages par na jaye
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
