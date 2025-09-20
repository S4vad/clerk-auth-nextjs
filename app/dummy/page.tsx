import { useUser } from "@clerk/nextjs";

export default function Profile() {
  const { user } = useUser();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <p className="text-gray-600">Email: {user.primaryEmailAddress?.emailAddress}</p>
      <p className="text-gray-600">Name: {user.firstName} {user.lastName}</p>
    </div>
  );
}