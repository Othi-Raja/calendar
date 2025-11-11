"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Lock, User, Calendar, Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import { db, auth } from "../integrations/firebaseConfig/config";
import googleLogo from "../asserts/google-icon-logo-svgrepo-com.png";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
export const Auth = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [noFieldData,SetnoFieldData] = useState(false)
  const { toast } = useToast();
  const pseudoEmail = `${username.trim().toLowerCase()}@calendarapp.local`;
  // ✅ Password strength logic
  const getPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 1) return { label: "Weak", color: "bg-red-500", width: "w-1/3" };
    if (score === 2) return { label: "Medium", color: "bg-yellow-500", width: "w-2/3" };
    if (score >= 3) return { label: "Strong", color: "bg-green-500", width: "w-full" };
    return { label: "", color: "", width: "" };
  };
  const passwordStrength = getPasswordStrength(password);
  // ✅ SIGN UP
  const handleSignup = async () => {
    if (!username || !password) {

      toast({ variant: "destructive", title: "Error", description: "Please fill all fields" });
      return;
    }
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, pseudoEmail, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        username: username.trim().toLowerCase(),
        email: pseudoEmail,
        createdAt: new Date().toISOString(),
      });
      toast({ title: "Account Created", description: `Welcome ${username}!` });
      setUsername("");
      setPassword("");
      setActiveTab("login"); // 🔁 Switch to Login after successful signup
    }  catch (error: any) {
  let message = "Something went wrong. Please try again.";

  // ✅ Firebase error handling
  if (error.code === "auth/email-already-in-use") {
    message = "User already exists. Please log in instead.";
  } else if (error.code === "auth/invalid-email") {
    message = "Invalid email address.";
  } else if (error.code === "auth/weak-password") {
    message = "Password is too weak. Please use at least 6 characters.";
  } else if (error.code === "auth/network-request-failed") {
    message = "Network error. Please check your internet connection.";
  }

  toast({
    variant: "destructive",
    title: "",
    description: message,
  });
}finally {
      setLoading(false);
    }
  };
  // ✅ LOGIN
  const handleLogin = async () => {
    if (!username || !password) {
      toast({ variant: "destructive", title: "Error", description: "Please fill all fields" });
      return;
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, pseudoEmail, password);
      toast({
        title: "Welcome Back!",
        description: `Logged in as ${username}`,
      });
      setUsername("");
      setPassword("");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  // ✅ GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Check if user exists in Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          username: user.displayName || "Unnamed User",
          email: user.email,
          createdAt: new Date().toISOString(),
          provider: "google",
        });
      }
      toast({
        title: "Signed in with Google",
        description: `Welcome ${user.displayName || "User"}!`,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Google Login Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Calendar App</CardTitle>
          <CardDescription>
            {activeTab === "login" ? "Sign in to manage your events" : "Create your account to get started"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as "login" | "signup")} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" className={activeTab === "login" ? "bg-black text-white rounded-lg" : ""}>
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className={activeTab === "signup" ? "bg-black text-white rounded-lg" : ""}>
                Sign Up
              </TabsTrigger>
            </TabsList>
            {/* LOGIN TAB */}
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="login-username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button onClick={handleLogin} disabled={loading} className="w-full bg-black text-white outline-none">
                {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                {loading ? "Loading..." : "Login"}
              </Button>
              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground text-gray-500 bg-white">Or</span>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 outline-none"
              >
                <Image src={googleLogo} alt="Google logo" height={20} width={20} />
                Sign in with Google
              </Button>
            </TabsContent>
            {/* SIGNUP TAB */}
            <TabsContent value="signup" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
                {/* ✅ Password strength indicator */}
                {password.length > 0 && (
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-2 transition-all duration-300 rounded-full ${passwordStrength.color} ${passwordStrength.width}`}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 text-right font-medium">
                      {passwordStrength.label} Password
                    </p>
                  </div>
                )}
              </div>
              <Button onClick={handleSignup} disabled={loading} className="w-full bg-black text-white outline-none">
                {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                {loading ? "Loading..." : "Create Account"}
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
