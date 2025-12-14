import { NextResponse } from "next/server";

// This is where you check if the user is logged in
function isAuthenticated(request) {
  // Example: check cookie named "token"
  const token = request.cookies.get("token")?.value;
  return !!token; // return true if logged in
}

export function middleware(request) {
  const loggedIn = isAuthenticated(request);

  // If user NOT logged in → redirect to /login
  if (!loggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access if logged in
  return NextResponse.next();
}

// Protect multiple pages
export const config = {
  matcher: [
    // "/dashboard",
    // "/course-registration",   
    "/settings", 
    // "/admin",        
    "/"
  ],
};