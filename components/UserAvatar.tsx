// Importing the `cn` utility function from a file located at "@/lib/utils"
import { cn } from "@/lib/utils";

// Importing various components for avatar rendering
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

// Defining the `UserAvatar` component
function UserAvatar({
  name,
  image,
  className,
}: {
  name: string;
  image: string;
  className?: string;
}) {
  // Rendering the UserAvatar component
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {/* Rendering the image if available */}
      {image && (
        <Image
          src={image} // Image source
          alt={name} // Image alt text
          width={40} // Image width
          height={40} // Image height
          className="rounded-full" // Additional image class
        />
      )}
      {/* AvatarImage component */}
      {/*  <AvatarImage src="https://github.com/shadcn.png" /> */}
      {/* AvatarFallback component */}
      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg"
      >
        {
          name
            .split(" ") // Split the name by spaces
            .map((n) => n[0]) // Extract the first letter of each word
            .join("") // Join the letters together to form the acronym
        }
      </AvatarFallback>
    </Avatar>
  );
}

// Exporting the UserAvatar component as the default export
export default UserAvatar;

/* Notes:

The cn utility function is imported from a file located at "@/lib/utils". It is likely used to concatenate and manage CSS class names.

Various components related to avatar rendering are imported from "@/components/ui/avatar".
The UserAvatar component is defined with props for name, image, and className.

Inside the component, it renders an Avatar component with a conditional class name based on className.

If image is available, it renders an Image component with specified source, alt text, width, and height.

It also renders AvatarImage and AvatarFallback components within the Avatar component.

AvatarFallback renders the initials of the name if an image is not available, using a delayed fade-in effect.

The UserAvatar component is exported as the default export.


 */
