// Importing the withAuth middleware from the next-auth package
import { withAuth } from "next-auth/middleware";

// Exporting the withAuth middleware as the default export
export default withAuth;

// Configuration options for the withAuth middleware
export const config = {
  // Matcher array specifying the routes that require authentication
  matcher: ["/chat", "/chat/:id*", "/register"],
};

/* Notes:

The withAuth middleware is imported from the "next-auth/middleware" package.
The withAuth middleware is exported as the default export.
The config object specifies configuration options for the withAuth middleware.
The matcher array inside config defines the routes that require authentication, including "/chat", "/chat/:id*", and "/register".
Routes specified in the matcher array will be protected by the authentication middleware. */
