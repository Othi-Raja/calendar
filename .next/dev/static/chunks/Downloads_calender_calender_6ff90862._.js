(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/calender/calender/src/app/components/Auth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Auth",
    ()=>Auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/integrations/supabase/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/label'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/card'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/tabs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/hooks/use-toast'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const Auth = ()=>{
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = useToast();
    const handleEmailAuth = async (type)=>{
        try {
            setLoading(true);
            const redirectUrl = `${window.location.origin}/`;
            if (type === "signup") {
                const { error: error_0 } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: redirectUrl
                    }
                });
                if (error_0) throw error_0;
                toast({
                    title: "Success!",
                    description: "Account created successfully. You can now login."
                });
            } else {
                const { error: error_1 } = await supabase.auth.signInWithPassword({
                    email,
                    password
                });
                if (error_1) throw error_1;
                toast({
                    title: "Welcome back!",
                    description: "You've successfully logged in."
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message
            });
        } finally{
            setLoading(false);
        }
    };
    const handleGoogleAuth = async ()=>{
        try {
            setLoading(true);
            const { error: error_3 } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/`
                }
            });
            if (error_3) throw error_3;
        } catch (error_2) {
            toast({
                variant: "destructive",
                title: "Error",
                description: error_2.message
            });
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            className: "w-full max-w-md shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardHeader, {
                    className: "space-y-3 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-6 h-6 text-primary-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                            className: "text-2xl font-bold",
                            children: "Calendar App"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardDescription, {
                            children: "Sign in to manage your events"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tabs, {
                            defaultValue: "login",
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsList, {
                                    className: "grid w-full grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                            value: "login",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                            value: "signup",
                                            children: "Sign Up"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                    value: "login",
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                    htmlFor: "login-email",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            id: "login-email",
                                                            type: "email",
                                                            placeholder: "your@email.com",
                                                            value: email,
                                                            onChange: (e)=>setEmail(e.target.value),
                                                            className: "pl-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                    htmlFor: "login-password",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            id: "login-password",
                                                            type: "password",
                                                            placeholder: "••••••••",
                                                            value: password,
                                                            onChange: (e_0)=>setPassword(e_0.target.value),
                                                            className: "pl-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            onClick: ()=>handleEmailAuth("login"),
                                            disabled: loading,
                                            className: "w-full",
                                            children: loading ? "Loading..." : "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                    value: "signup",
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                    htmlFor: "signup-email",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            id: "signup-email",
                                                            type: "email",
                                                            placeholder: "your@email.com",
                                                            value: email,
                                                            onChange: (e_1)=>setEmail(e_1.target.value),
                                                            className: "pl-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                    htmlFor: "signup-password",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            id: "signup-password",
                                                            type: "password",
                                                            placeholder: "••••••••",
                                                            value: password,
                                                            onChange: (e_2)=>setPassword(e_2.target.value),
                                                            className: "pl-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            onClick: ()=>handleEmailAuth("signup"),
                                            disabled: loading,
                                            className: "w-full",
                                            children: loading ? "Loading..." : "Create Account"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative my-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-full border-t"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex justify-center text-xs uppercase",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-card px-2 text-muted-foreground",
                                        children: "Or continue with"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variant: "outline",
                            onClick: handleGoogleAuth,
                            disabled: loading,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "mr-2 h-4 w-4",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                            fill: "#4285F4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                            fill: "#34A853"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                            fill: "#FBBC05"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                            fill: "#EA4335"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Sign in with Google"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
        lineNumber: 80,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Auth, "lw/jL7uJYApoGJ7iNFLIFXdZ+48=", false, function() {
    return [
        useToast
    ];
});
_c = Auth;
var _c;
__turbopack_context__.k.register(_c, "Auth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarHeader",
    ()=>CalendarHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
(()=>{
    const e = new Error("Cannot find module '@/integrations/supabase/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/hooks/use-toast'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const CalendarHeader = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "7655089b94e95be946fc342e922bdbb97868d9f1d146f284c46e976d73bc92b1") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7655089b94e95be946fc342e922bdbb97868d9f1d146f284c46e976d73bc92b1";
    }
    const { currentDate, onPrevMonth, onNextMonth, onToday } = t0;
    const { toast } = useToast();
    let t1;
    if ($[1] !== toast) {
        t1 = async ()=>{
            const { error } = await supabase.auth.signOut();
            if (error) {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Failed to logout"
                });
            }
        };
        $[1] = toast;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleLogout = t1;
    let t2;
    if ($[3] !== currentDate) {
        t2 = currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });
        $[3] = currentDate;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const monthYear = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 bg-primary rounded-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                        className: "w-5 h-5 text-primary-foreground"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
                        lineNumber: 63,
                        columnNumber: 135
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
                    lineNumber: 63,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-foreground",
                    children: "My Calendar"
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
                    lineNumber: 63,
                    columnNumber: 201
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== handleLogout) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    variant: "outline",
                    onClick: handleLogout,
                    className: "gap-2",
                    children: [
                        t4,
                        "Logout"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
                    lineNumber: 77,
                    columnNumber: 112
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = handleLogout;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== monthYear) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold text-foreground",
            children: monthYear
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = monthYear;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== onPrevMonth) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
            variant: "outline",
            size: "icon",
            onClick: onPrevMonth,
            children: t7
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = onPrevMonth;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== onToday) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
            variant: "outline",
            onClick: onToday,
            children: "Today"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = onToday;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== onNextMonth) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
            variant: "outline",
            size: "icon",
            onClick: onNextMonth,
            children: t10
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = onNextMonth;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t8 || $[21] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t8,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t11;
        $[20] = t8;
        $[21] = t9;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12 || $[24] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card p-4 rounded-lg shadow-sm border",
            children: [
                t6,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t12;
        $[24] = t6;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t13 || $[27] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t5,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t13;
        $[27] = t5;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
};
_s(CalendarHeader, "uKoEhGJwDzr+nohcfpAUDzkcygs=", false, function() {
    return [
        useToast
    ];
});
_c = CalendarHeader;
var _c;
__turbopack_context__.k.register(_c, "CalendarHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarCell",
    ()=>CalendarCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
(()=>{
    const e = new Error("Cannot find module '@/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const CalendarCell = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "533d591c35d41e14379ba1091c609624047365988a9bffab2817b5e600575f2e") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "533d591c35d41e14379ba1091c609624047365988a9bffab2817b5e600575f2e";
    }
    const { date, events, onDateClick, onDeleteEvent, isToday } = t0;
    if (!date) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-calendar-cell min-h-[100px] p-2"
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                lineNumber: 31,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    const t1 = isToday && "bg-calendar-today";
    let t2;
    if ($[2] !== t1) {
        t2 = cn("bg-calendar-cell min-h-[100px] p-2 cursor-pointer transition-colors hover:bg-calendar-cellHover", t1);
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== date || $[5] !== onDateClick) {
        t3 = ()=>onDateClick(date);
        $[4] = date;
        $[5] = onDateClick;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const t4 = isToday ? "text-primary font-bold" : "text-foreground";
    let t5;
    if ($[7] !== t4) {
        t5 = cn("text-sm font-medium mb-1", t4);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== date) {
        t6 = date.getDate();
        $[9] = date;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== events || $[15] !== onDeleteEvent) {
        let t9;
        if ($[17] !== onDeleteEvent) {
            t9 = (event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "group relative bg-primary/10 text-primary text-xs p-1 rounded truncate hover:bg-primary/20 transition-colors",
                    onClick: _temp,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block truncate pr-5",
                            children: event.title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                            lineNumber: 86,
                            columnNumber: 178
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variant: "ghost",
                            size: "icon",
                            className: "absolute right-0 top-0 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity",
                            onClick: (e_0)=>{
                                e_0.stopPropagation();
                                onDeleteEvent(event.id);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                                lineNumber: 89,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                            lineNumber: 86,
                            columnNumber: 236
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, event.id, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                    lineNumber: 86,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            $[17] = onDeleteEvent;
            $[18] = t9;
        } else {
            t9 = $[18];
        }
        t8 = events.map(t9);
        $[14] = events;
        $[15] = onDeleteEvent;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: t8
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t2 || $[22] !== t3 || $[23] !== t7 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            onClick: t3,
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t2;
        $[22] = t3;
        $[23] = t7;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    return t10;
};
_c = CalendarCell;
function _temp(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "CalendarCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarGrid",
    ()=>CalendarGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx [app-client] (ecmascript)");
;
;
;
const CalendarGrid = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "97b5ddd225d487088d80dd88df6054861e76a2218702d577b63adbf9802de2ab") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "97b5ddd225d487088d80dd88df6054861e76a2218702d577b63adbf9802de2ab";
    }
    const { currentDate, events, onDateClick, onDeleteEvent } = t0;
    const getDaysInMonth = _temp;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== currentDate || $[2] !== events || $[3] !== onDateClick || $[4] !== onDeleteEvent) {
        const days_0 = getDaysInMonth(currentDate);
        let t5;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ];
            $[9] = t5;
        } else {
            t5 = $[9];
        }
        const weekDays = t5;
        const getEventsForDate = (date_0)=>events.filter((event)=>event.date.getDate() === date_0.getDate() && event.date.getMonth() === date_0.getMonth() && event.date.getFullYear() === date_0.getFullYear());
        t3 = "bg-card rounded-lg shadow-lg border overflow-hidden";
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-px bg-border",
                children: weekDays.map(_temp2)
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                lineNumber: 42,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[10] = t4;
        } else {
            t4 = $[10];
        }
        t1 = "grid grid-cols-7 gap-px bg-border";
        t2 = days_0.map((date_1, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarCell"], {
                date: date_1,
                events: date_1 ? getEventsForDate(date_1) : [],
                onDateClick: onDateClick,
                onDeleteEvent: onDeleteEvent,
                isToday: date_1 ? date_1.toDateString() === new Date().toDateString() : false
            }, index, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                lineNumber: 48,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = currentDate;
        $[2] = events;
        $[3] = onDateClick;
        $[4] = onDeleteEvent;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[11] !== t1 || $[12] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t1;
        $[12] = t2;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t3 || $[15] !== t4 || $[16] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    return t6;
};
_c = CalendarGrid;
function _temp(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days = [];
    for(let i = 0; i < startingDayOfWeek; i++){
        days.push(null);
    }
    for(let day = 1; day <= daysInMonth; day++){
        days.push(new Date(year, month, day));
    }
    return days;
}
function _temp2(day_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-muted p-3 text-center font-semibold text-sm text-muted-foreground",
        children: day_0
    }, day_0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
        lineNumber: 101,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CalendarGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventModal",
    ()=>EventModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/dialog'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/label'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/textarea'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const EventModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "6c64c57627b23f5ae8ef64494bb97e1e0b066fc9e1dc6e5483ee67e7a8302c3f") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c64c57627b23f5ae8ef64494bb97e1e0b066fc9e1dc6e5483ee67e7a8302c3f";
    }
    const { isOpen, onClose, onAddEvent, selectedDate } = t0;
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] !== isOpen) {
        t1 = ()=>{
            if (!isOpen) {
                setTitle("");
                setDescription("");
            }
        };
        t2 = [
            isOpen
        ];
        $[1] = isOpen;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== description || $[5] !== onAddEvent || $[6] !== onClose || $[7] !== title) {
        t3 = (e)=>{
            e.preventDefault();
            if (title.trim()) {
                onAddEvent(title, description);
                onClose();
            }
        };
        $[4] = description;
        $[5] = onAddEvent;
        $[6] = onClose;
        $[7] = title;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleSubmit = t3;
    let t4;
    if ($[9] !== selectedDate) {
        t4 = selectedDate ? selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }) : "";
        $[9] = selectedDate;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const formattedDate = t4;
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogTitle, {
            children: "Add New Event"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== formattedDate) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogHeader, {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogDescription, {
                    children: formattedDate
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                    lineNumber: 89,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = formattedDate;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
            htmlFor: "event-title",
            children: "Event Title *"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = (e_0)=>setTitle(e_0.target.value);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    id: "event-title",
                    placeholder: "Enter event title",
                    value: title,
                    onChange: t8,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                    lineNumber: 111,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = title;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
            htmlFor: "event-description",
            children: "Description (optional)"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = (e_1)=>setDescription(e_1.target.value);
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== description) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                    id: "event-description",
                    placeholder: "Add event details",
                    value: description,
                    onChange: t11,
                    rows: 3
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                    lineNumber: 133,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = description;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== onClose) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
            type: "button",
            variant: "outline",
            onClick: onClose,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = onClose;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
            type: "submit",
            children: "Add Event"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t13;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== handleSubmit || $[28] !== t12 || $[29] !== t15 || $[30] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t9,
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = handleSubmit;
        $[28] = t12;
        $[29] = t15;
        $[30] = t9;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t16 || $[33] !== t6) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogContent, {
            className: "sm:max-w-[425px]",
            children: [
                t6,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t16;
        $[33] = t6;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== isOpen || $[36] !== onClose || $[37] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
            open: isOpen,
            onOpenChange: onClose,
            children: t17
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = isOpen;
        $[36] = onClose;
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    return t18;
};
_s(EventModal, "EA2MnaeBy++r0GzgDN7+Z9SdR0w=");
_c = EventModal;
var _c;
__turbopack_context__.k.register(_c, "EventModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/Calendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$EventModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Calendar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "9ee8b01c10f6d754079b0598fc5655c212c6b9e90ba5c1e4a41e38a4cd8a0e2b") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ee8b01c10f6d754079b0598fc5655c212c6b9e90ba5c1e4a41e38a4cd8a0e2b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (date)=>{
            setSelectedDate(date);
            setIsModalOpen(true);
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleDateClick = t2;
    let t3;
    if ($[4] !== events || $[5] !== selectedDate) {
        t3 = (title, description)=>{
            if (selectedDate) {
                const newEvent = {
                    id: Date.now().toString(),
                    title,
                    date: selectedDate,
                    description
                };
                setEvents([
                    ...events,
                    newEvent
                ]);
                setIsModalOpen(false);
            }
        };
        $[4] = events;
        $[5] = selectedDate;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleAddEvent = t3;
    let t4;
    if ($[7] !== events) {
        t4 = (eventId)=>{
            setEvents(events.filter((event)=>event.id !== eventId));
        };
        $[7] = events;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleDeleteEvent = t4;
    let t5;
    if ($[9] !== currentDate) {
        t5 = ()=>{
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        };
        $[9] = currentDate;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handlePrevMonth = t5;
    let t6;
    if ($[11] !== currentDate) {
        t6 = ()=>{
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        };
        $[11] = currentDate;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handleNextMonth = t6;
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ()=>{
            setCurrentDate(new Date());
        };
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const handleToday = t7;
    let t8;
    if ($[14] !== currentDate || $[15] !== handleNextMonth || $[16] !== handlePrevMonth) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarHeader"], {
            currentDate: currentDate,
            onPrevMonth: handlePrevMonth,
            onNextMonth: handleNextMonth,
            onToday: handleToday
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = currentDate;
        $[15] = handleNextMonth;
        $[16] = handlePrevMonth;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== currentDate || $[19] !== events || $[20] !== handleDeleteEvent) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarGrid"], {
            currentDate: currentDate,
            events: events,
            onDateClick: handleDateClick,
            onDeleteEvent: handleDeleteEvent
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = currentDate;
        $[19] = events;
        $[20] = handleDeleteEvent;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t8 || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t8;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ()=>setIsModalOpen(false);
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== handleAddEvent || $[27] !== isModalOpen || $[28] !== selectedDate) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$EventModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventModal"], {
            isOpen: isModalOpen,
            onClose: t11,
            onAddEvent: handleAddEvent,
            selectedDate: selectedDate
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = handleAddEvent;
        $[27] = isModalOpen;
        $[28] = selectedDate;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== t10 || $[31] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background p-4 md:p-8",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t10;
        $[31] = t12;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    return t13;
};
_s(Calendar, "/aDv3i7j3pV64sLvXWhNGCRdLKc=");
_c = Calendar;
var _c;
__turbopack_context__.k.register(_c, "Calendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/pages/Index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$Auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/Auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$Calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/Calendar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// import { supabase } from "@/integrations/supabase/client";
// import { Session } from "@supabase/supabase-js";
// import { Auth } from "@/components/Auth";
// import { Calendar } from "@/components/Calendar";
const Index = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "d6f5c106f29c8f893def77ecf2a7e5bd8ed675f501f79c4d34c555dd49df06f9") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d6f5c106f29c8f893def77ecf2a7e5bd8ed675f501f79c4d34c555dd49df06f9";
    }
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            const { data: t2 } = supabase.auth.onAuthStateChange((_event, session_0)=>{
                setSession(session_0);
                setLoading(false);
            });
            const { subscription } = t2;
            supabase.auth.getSession().then((t3)=>{
                const { data: t4 } = t3;
                const { session: session_1 } = t4;
                setSession(session_1);
                setLoading(false);
            });
            return ()=>subscription.unsubscribe();
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (loading) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
                            lineNumber: 58,
                            columnNumber: 118
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-muted-foreground",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
                            lineNumber: 58,
                            columnNumber: 207
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
                    lineNumber: 58,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
                lineNumber: 58,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    if (!session) {
        let t2;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$Auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Auth"], {}, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
                lineNumber: 68,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$Calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {}, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_s(Index, "dkuVYdQvZEJ7aX3whq8i9qrSbuA=");
_c = Index;
const __TURBOPACK__default__export__ = Index;
var _c;
__turbopack_context__.k.register(_c, "Index");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Mail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mail", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)");
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Lock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Lock", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
;
 //# sourceMappingURL=lock.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)");
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Calendar", [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
]);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronLeft", [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LogOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LogOut", [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }
    ]
]);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)");
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_calender_calender_6ff90862._.js.map