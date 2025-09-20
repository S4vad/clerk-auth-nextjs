import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserButtonComponent from "@/components/Userbutton";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <UserButtonComponent />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Welcome to your protected dashboard!</p>
          <p className="text-gray-600">Hello, {user.firstName}!</p>
        </div>
      </div>
    </div>
  );
}