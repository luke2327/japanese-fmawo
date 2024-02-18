import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const accessToken = cookies().get("accessToken")?.value;
  const accessAdmin = request.nextUrl.pathname === "/admin";
  const accessAdminLogin = request.nextUrl.pathname === "/admin/login";
  const accessAdminDashboard = request.nextUrl.pathname === "/admin/dashboard";

  if (!accessToken && (accessAdmin || accessAdminDashboard)) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  } else if (accessToken && (accessAdmin || accessAdminLogin)) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/admin/:path*", "/proverb/:path*", "/guide/:path*"],
};
