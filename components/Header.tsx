// Importing getServerSession function from NextAuth for server-side session management
import { getServerSession } from "next-auth";

// Importing components and modules
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import UserButton from "./UserButton";
import { authOptions } from "@/auth"; // Importing authentication options
import Link from "next/link"; // Importing Link component from Next.js
import { MessageSquareIcon } from "lucide-react"; // Importing MessageSquareIcon component from lucide-react

// Asynchronous function to render the Header component
async function Header() {
  // Retrieves the session data of the current user from the server-side
  const session = await getServerSession(authOptions);
  console.log(session);

  // Returning JSX for the header component
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo /> {/* Rendering the Logo component */}
        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* Check notes below for better SEO.*/}
          {/* Conditional rendering based on session existence */}
          {session ? (
            <>
              {/* Link to the chat page if session exists otherwise Link to the pricing page if no session*/}
              <Link href={"/chat"} prefetch={false}>
                <MessageSquareIcon className="text-black dark:text-white" />
              </Link>
            </>
          ) : (
            <Link href="/pricing">Pricing</Link>
          )}

          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>
    </header>
  );
}

export default Header;

/*  Might want to do this FOR SEO Organizing landing pages and pricing
  pages into separate routes and creating static pages without session
  provider checking.
  
  The practice of organizing landing pages and pricing pages into separate routes and creating static pages without session provider checking is commonly referred to as "static site generation" (SSG) or "static page generation."

  Static site generation involves pre-rendering pages at build time, allowing you to generate HTML files for each page of your application in advance. This approach offers several benefits, including improved performance, enhanced SEO, and simplified deployment.

  By generating static pages, you reduce the workload on your server, improve page load times, and provide a better user experience for your visitors. Additionally, static pages are more search engine-friendly, making them easier to index and rank in search engine results.

  Overall, static site generation is a powerful technique for building efficient, scalable, and user-friendly web applications.
  
  This offers several benefits: Improved Performance: By
  statically generating landing pages and pricing pages, you reduce
  server load and improve page load times for users, resulting in a
  better user experience. Simplified Code: Separating static pages from
  dynamic ones simplifies code maintenance development efforts,
  making it easier to manage and updindividual pages. Clearer
  Architecture: Grouping routes logically using static generation
  for certain pages creates a cleaarchitecture, making it easier for
  developers to understand and navigate codebase. Enhanced
  Scalability: Static pages are highly scalaand can handle increased
  traffic with minimal impact on performanenabling your application
  to grow seamlessly as demand increases. Benefits: Statically
  generated pages are more seaengine-friendly, improving your site's
  search engine rankings and visibility.conclusion, organizing
  landing pages and pricing pages as static pawithout session
  provider checking enhances performansimplifies code maintenance,
  and improves overall scalability, resultinga more efficient and
  user-friendly application. */
