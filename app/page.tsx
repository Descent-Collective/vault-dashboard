"use client";

import useSystemFunctions from "@/hooks/useSystemFunctions";

export default function Home() {
  const { userState } = useSystemFunctions();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome {userState.user?.name}</h1>
    </main>
  );
}
