"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-3xl font-bold">
          Welcome {session.user?.name}
        </h1>

        <img
          src={session.user?.image || ""}
          alt="profile"
          className="rounded-full"
        />

        <p>{session.user?.email}</p>

        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}