"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Lock, User, Calendar } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import { db, auth } from "../integrations/firebaseConfig/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const pseudoEmail = `${username.trim().toLowerCase()}@calendarapp.local`;

  // ✅ SIGN UP
  const handleSignup = async () => {
    if (!username || !password) {
      toast({ variant: "destructive", title: "Error", description: "Please fill all fields" });
      return;
    }

    try {
      setLoading(true);

      // Create Firebase Auth account
      const userCredential = await createUserWithEmailAndPassword(auth, pseudoEmail, password);
      const user = userCredential.user;

      // Create user profile in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username.trim().toLowerCase(),
        email: pseudoEmail,
        createdAt: new Date().toISOString(),
      });

      toast({
        title: "Account Created",
        description: `Welcome ${username}!`,
      });

      setUsername("");
      setPassword("");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Signup Error",
        description: error.message,
      });
    } finally {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Calendar App</CardTitle>
          <CardDescription>Sign in to manage your events</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
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
              <Button onClick={handleLogin} disabled={loading} className="w-full">
                {loading ? "Loading..." : "Login"}
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
              </div>
              <Button onClick={handleSignup} disabled={loading} className="w-full">
                {loading ? "Loading..." : "Create Account"}
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
