"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

function UserButton({ session }: { session: Session | null }) {
  // If session is not present, render a Sign In button.
  // When clicked, it triggers the signIn() function to initiate the authentication process.
  if (!session)
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Sign In
      </Button>
    );

  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar name={session.user?.name} image={session.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => signOut()}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}

export default UserButton;

/* Here's a note explaining the syntax { session }: { session: Session | null }:

The curly braces { session } are used to destructure the props object passed to a React component.

The colon : is followed by the type annotation, which specifies the type of the session property.

Session | null denotes that the session property can have a type of Session (a specific type) or null (indicating absence of session data).

In summary, the code destructures the props object to extract the session property, ensuring that its type is either Session or null. This pattern is often used in React components to handle optional or nullable props.
 */

// Note: The UserButton component is used within the Header.tsx component. You can also press Ctrl and left-click on 'UserButton' to see where it's being utilized.
