import Foods from "@/components/Foods";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/router";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const getData = async () => {
    if (loading) return;
    if (!user) {
      return route.push("/auth/login");
    }
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div className="w-full h-screen flex">
      <Foods />
    </div>
  );
}
