"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../integrations/firebaseConfig/config";
import { Auth } from "../components/Auth";
import { Calendar } from "../components/Calendar";
const Page = () => {
  const [session, setSession] = useState<boolean | null>(null); // null = loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // ✅ Real-time Firebase Auth listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Logged in
        setSession(true);
      } else {
        // Logged out
        setSession(false);
      }
      setLoading(false);
    });
    // Cleanup listener when unmounted
    return () => unsubscribe();
  }, []);
  if (loading || session === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Checking session...</p>
        </div>
      </div>
    );
  }
  // ✅ If not logged in → show Auth
  if (!session) {
    return <Auth />;
  }
  // ✅ Logged in → show Calendar
  return <Calendar />;
};
export default Page;
