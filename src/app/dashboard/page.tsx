"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        {session && (
          <p className="text-lg mb-6">Welcome, {session.user?.name || session.user?.email}!</p>
        )}
        <button
          onClick={() => signOut({ callbackUrl: "/auth/signin" })}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Out
        </button>
        <div className="mt-8 text-gray-600">
          <p>Ini adalah area dashboard Anda. Di sini Anda akan menambahkan fungsionalitas seller dan customer.</p>
        </div>
      </div>
    </div>
  );
}