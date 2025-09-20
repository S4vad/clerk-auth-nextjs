import { UserButton } from "@clerk/nextjs";

export default function UserButtonComponent() {
  return (
    <div className="flex items-center space-x-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}