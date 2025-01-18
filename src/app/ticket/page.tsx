"use client"


import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Ticket() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const fullName = searchParams.get("fullName");
  const email = searchParams.get("email");
  const githubUsername = searchParams.get("githubUsername");
  const avatar = searchParams.get("avatar");

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-900 text-white">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg text-gray-800">
        <h2 className="text-2xl font-bold mb-4">🎉 Your Ticket 🎉</h2>
        {avatar && (
          <img
            src={decodeURIComponent(avatar)}
            alt="Avatar"
            className="mx-auto rounded-full w-32 h-32 mb-4"
          />
        )}
        <p className="text-lg font-semibold">Name: {fullName}</p>
        <p className="text-lg">Email: {email}</p>
        <p className="text-lg">GitHub: {githubUsername}</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
