import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("auth-token");

  // Allow access to public routes without authentication
  const publicRoutes = ["/", "/register"];
  const isPublicRoute = publicRoutes.some(
    (route) =>
      request.nextUrl.pathname === route ||
      request.nextUrl.pathname.startsWith(route + "/")
  );

  // If authenticated and trying to access register page, redirect to home
  if (isAuthenticated && request.nextUrl.pathname.startsWith("/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If not authenticated and trying to access protected routes, redirect to register
  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/register", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
