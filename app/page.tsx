"use client";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import UserButtonComponent from "@/components/Userbutton";

export default function Dashboard() {
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !userId) {
      redirect("/sign-in");
    }
  }, [isLoaded, userId]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <UserButtonComponent />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Welcome to your protected Main page</p>
        </div>
      </div>
    </div>
  );
}