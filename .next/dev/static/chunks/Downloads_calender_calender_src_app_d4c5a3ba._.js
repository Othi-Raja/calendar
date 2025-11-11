(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/calender/calender/src/app/integrations/firebaseConfig/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/integrations/firebase/config.ts
__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZrXqVD7NVdYOVAzjDko-ONksRoMTc7ho",
    authDomain: "portfolioformdata-4caae.firebaseapp.com",
    databaseURL: "https://portfolioformdata-4caae-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolioformdata-4caae",
    storageBucket: "portfolioformdata-4caae.appspot.com",
    messagingSenderId: "51070256017",
    appId: "1:51070256017:web:9395f746a33189a57c1030",
    measurementId: "G-PEYFMT3DE4"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/card.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/card.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/card.tsx",
        lineNumber: 32,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/tabs.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/tabs.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TabsTrigger;
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/Auth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Auth",
    ()=>Auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/integrations/firebaseConfig/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
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
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const pseudoEmail = `${username.trim().toLowerCase()}@calendarapp.local`;
    // ✅ SIGN UP
    const handleSignup = async ()=>{
        if (!username || !password) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please fill all fields"
            });
            return;
        }
        try {
            setLoading(true);
            // Create Firebase Auth account
            const userCredential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], pseudoEmail, password);
            const user = userCredential.user;
            // Create user profile in Firestore
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid), {
                username: username.trim().toLowerCase(),
                email: pseudoEmail,
                createdAt: new Date().toISOString()
            });
            toast({
                title: "Account Created",
                description: `Welcome ${username}!`
            });
            setUsername("");
            setPassword("");
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Signup Error",
                description: error.message
            });
        } finally{
            setLoading(false);
        }
    };
    // ✅ LOGIN
    const handleLogin = async ()=>{
        if (!username || !password) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please fill all fields"
            });
            return;
        }
        try {
            setLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], pseudoEmail, password);
            toast({
                title: "Welcome Back!",
                description: `Logged in as ${username}`
            });
            setUsername("");
            setPassword("");
        } catch (error_0) {
            toast({
                variant: "destructive",
                title: "Login Error",
                description: error_0.message
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-md shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "space-y-3 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-6 h-6 text-primary-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-2xl font-bold",
                            children: "Calendar App"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: "Sign in to manage your events"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        defaultValue: "login",
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid w-full grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "login",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "signup",
                                        children: "Sign Up"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "login",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "login-username",
                                                children: "Username"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "login-username",
                                                        placeholder: "username",
                                                        value: username,
                                                        onChange: (e)=>setUsername(e.target.value),
                                                        className: "pl-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "login-password",
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "login-password",
                                                        type: "password",
                                                        placeholder: "••••••••",
                                                        value: password,
                                                        onChange: (e_0)=>setPassword(e_0.target.value),
                                                        className: "pl-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleLogin,
                                        disabled: loading,
                                        className: "w-full",
                                        children: loading ? "Loading..." : "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "signup",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "signup-username",
                                                children: "Username"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "signup-username",
                                                        placeholder: "username",
                                                        value: username,
                                                        onChange: (e_1)=>setUsername(e_1.target.value),
                                                        className: "pl-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "signup-password",
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "signup-password",
                                                        type: "password",
                                                        placeholder: "••••••••",
                                                        value: password,
                                                        onChange: (e_2)=>setPassword(e_2.target.value),
                                                        className: "pl-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSignup,
                                        disabled: loading,
                                        className: "w-full",
                                        children: loading ? "Loading..." : "Create Account"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/Auth.tsx",
        lineNumber: 92,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Auth, "LXqso1OCaEUaS4HPiLVCo6p147s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const CalendarHeader = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "127b3d301bb39e56d8491cbeb9a0eb8f10ef27d65ea9d5aeea0a115f287982c9") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "127b3d301bb39e56d8491cbeb9a0eb8f10ef27d65ea9d5aeea0a115f287982c9";
    }
    const { currentDate, onPrevMonth, onNextMonth, onToday } = t0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });
    let t1;
    if ($[1] !== currentDate) {
        t1 = currentDate.toLocaleDateString("en-US", {
            month: "long"
        });
        $[1] = currentDate;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const month = t1;
    let t2;
    if ($[3] !== currentDate) {
        t2 = currentDate.getFullYear();
        $[3] = currentDate;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const year = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -inset-2 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            color: "black"
        };
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== month) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            style: t4,
            className: "text-3xl font-bold text-black bg-gradien from-foreground to-foreground/70 bg-clip-text text-transparent",
            children: month
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = month;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== year) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg font-semibold text-muted-foreground px-3 py-1 bg-muted/50 rounded-lg",
            children: year
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = year;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-baseline gap-3",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t10;
    let t8;
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/prev relative overflow-hidden", "hover:border-primary/50 hover:bg-primary/5", "hover:shadow-md hover:shadow-primary/10", "transition-all duration-300");
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/prev:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-5 w-5 relative z-10 group-hover/prev:-translate-x-0.5 transition-transform duration-300"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t10;
        $[15] = t8;
        $[16] = t9;
    } else {
        t10 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t11;
    if ($[17] !== onPrevMonth) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "icon",
            onClick: onPrevMonth,
            className: t8,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = onPrevMonth;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/today relative overflow-hidden px-6", "hover:border-primary/50 hover:bg-primary/5", "hover:shadow-md hover:shadow-primary/10", "transition-all duration-300", "font-semibold");
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-y-[100%] group-hover/today:translate-y-0 transition-transform duration-300"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "h-4 w-4 mr-2 relative z-10 group-hover/today:scale-110 transition-transform duration-300"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10",
            children: "Today"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 -translate-x-full group-hover/today:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t12;
        $[20] = t13;
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
    } else {
        t12 = $[19];
        t13 = $[20];
        t14 = $[21];
        t15 = $[22];
        t16 = $[23];
    }
    let t17;
    if ($[24] !== onToday) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onToday,
            className: t12,
            children: [
                t13,
                t14,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = onToday;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    let t19;
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/next relative overflow-hidden", "hover:border-primary/50 hover:bg-primary/5", "hover:shadow-md hover:shadow-primary/10", "transition-all duration-300");
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover/next:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-5 w-5 relative z-10 group-hover/next:translate-x-0.5 transition-transform duration-300"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t18;
        $[27] = t19;
        $[28] = t20;
    } else {
        t18 = $[26];
        t19 = $[27];
        t20 = $[28];
    }
    let t21;
    if ($[29] !== onNextMonth) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "icon",
            onClick: onNextMonth,
            className: t18,
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = onNextMonth;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== t11 || $[32] !== t17 || $[33] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t11,
                t17,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t11;
        $[32] = t17;
        $[33] = t21;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    let t23;
    if ($[35] !== t22 || $[36] !== t7) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-br from-card via-card to-card/95 p-6 rounded-xl shadow-lg border border-border/50 backdrop-blur-sm",
            children: [
                t7,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t22;
        $[36] = t7;
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    let t25;
    if ($[39] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group/nav",
                children: [
                    t3,
                    t23,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
                lineNumber: 197,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarHeader.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t23;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    return t25;
};
_s(CalendarHeader, "zmshFnTy2h/BI3RcMmgy8WlZc1c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
"use client";
;
;
;
;
;
const CalendarCell = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "e2fdcaef0ef389df88313cd58258e6262a7f774f820463aaa68a210675ebd73b") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2fdcaef0ef389df88313cd58258e6262a7f774f820463aaa68a210675ebd73b";
    }
    const { date, events, onDateClick, onDeleteEvent, isToday } = t0;
    if (!date) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 min-h-[120px] p-3 rounded-lg"
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                lineNumber: 33,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    const hasEvents = events.length > 0;
    let remainingCount;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[2] !== date || $[3] !== events || $[4] !== hasEvents || $[5] !== isToday || $[6] !== onDateClick || $[7] !== onDeleteEvent) {
        const displayEvents = events.slice(0, 3);
        remainingCount = events.length - 3;
        let t7;
        if ($[15] !== isToday) {
            t7 = isToday && [
                "bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50 dark:from-indigo-900/40 dark:via-indigo-800/30 dark:to-indigo-900/40",
                "border-indigo-300 dark:border-indigo-600",
                "shadow-md shadow-indigo-200/50 dark:shadow-indigo-800/30",
                "ring-2 ring-indigo-200/50 dark:ring-indigo-700/40 ring-offset-2 ring-offset-white dark:ring-offset-gray-900"
            ];
            $[15] = isToday;
            $[16] = t7;
        } else {
            t7 = $[16];
        }
        const t8 = hasEvents && "hover:shadow-xl";
        if ($[17] !== t7 || $[18] !== t8) {
            t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative min-h-[120px] p-3 cursor-pointer rounded-lg transition-all duration-300 ease-out", "border border-transparent hover:border-indigo-200 dark:hover:border-indigo-700", "bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800", "hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 hover:-translate-y-0.5 group", t7, t8);
            $[17] = t7;
            $[18] = t8;
            $[19] = t3;
        } else {
            t3 = $[19];
        }
        if ($[20] !== date || $[21] !== onDateClick) {
            t4 = ()=>onDateClick(date);
            $[20] = date;
            $[21] = onDateClick;
            $[22] = t4;
        } else {
            t4 = $[22];
        }
        if ($[23] !== isToday) {
            t5 = isToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-1 -right-1 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-4 w-4 text-indigo-500 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                            lineNumber: 77,
                            columnNumber: 124
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-indigo-400/20 blur-md rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                            lineNumber: 77,
                            columnNumber: 186
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                    lineNumber: 77,
                    columnNumber: 98
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                lineNumber: 77,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0));
            $[23] = isToday;
            $[24] = t5;
        } else {
            t5 = $[24];
        }
        let t9;
        if ($[25] !== isToday) {
            t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center rounded-full transition-all duration-300", "text-sm font-semibold tracking-tight", isToday ? [
                "bg-indigo-600 text-white",
                "h-8 w-8 shadow-lg shadow-indigo-400/40",
                "ring-2 ring-indigo-300 ring-offset-2 ring-offset-white dark:ring-offset-gray-900"
            ] : [
                "text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white",
                "h-7 w-7 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-800/30"
            ]);
            $[25] = isToday;
            $[26] = t9;
        } else {
            t9 = $[26];
        }
        let t10;
        if ($[27] !== date) {
            t10 = date.getDate();
            $[27] = date;
            $[28] = t10;
        } else {
            t10 = $[28];
        }
        let t11;
        if ($[29] !== t10 || $[30] !== t9) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t9,
                children: t10
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[29] = t10;
            $[30] = t9;
            $[31] = t11;
        } else {
            t11 = $[31];
        }
        let t12;
        if ($[32] !== events.length || $[33] !== hasEvents) {
            t12 = hasEvents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-medium px-2 py-0.5 rounded-full", "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300", "group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300"),
                children: [
                    events.length,
                    " ",
                    events.length === 1 ? "event" : "events"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                lineNumber: 110,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0));
            $[32] = events.length;
            $[33] = hasEvents;
            $[34] = t12;
        } else {
            t12 = $[34];
        }
        if ($[35] !== t11 || $[36] !== t12) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    t11,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                lineNumber: 118,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[35] = t11;
            $[36] = t12;
            $[37] = t6;
        } else {
            t6 = $[37];
        }
        t1 = "space-y-1.5";
        let t13;
        if ($[38] !== onDeleteEvent) {
            t13 = (event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/event relative overflow-hidden rounded-md transition-all duration-300", "bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:via-indigo-800/20 dark:to-indigo-900/30", "hover:from-indigo-100 hover:via-indigo-200 hover:to-indigo-100 dark:hover:from-indigo-800/50 dark:hover:via-indigo-700/40 dark:hover:to-indigo-800/50", "border border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-600", "hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-800/20 transform hover:-translate-y-0.5"),
                    style: {
                        animationDelay: `${index * 50}ms`,
                        animation: "fadeIn 0.3s ease-out forwards"
                    },
                    onClick: _temp,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 p-2 pr-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-sm shadow-indigo-400/40"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                                lineNumber: 131,
                                columnNumber: 78
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-indigo-700 dark:text-indigo-300 truncate flex-1",
                                children: event.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                                lineNumber: 131,
                                columnNumber: 176
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-0 top-0 h-full w-8 rounded-l-none rounded-r-md", "opacity-0 group-hover/event:opacity-100 transition-opacity duration-200", "bg-gradient-to-l from-red-50 to-transparent dark:from-red-900/30", "hover:from-red-100 hover:to-red-50 dark:hover:from-red-800/50 dark:hover:to-transparent", "text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300"),
                                onClick: (e_0)=>{
                                    e_0.stopPropagation();
                                    onDeleteEvent(event.id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                                    lineNumber: 134,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                                lineNumber: 131,
                                columnNumber: 287
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                        lineNumber: 131,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                }, event.id, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
                    lineNumber: 128,
                    columnNumber: 31
                }, ("TURBOPACK compile-time value", void 0));
            $[38] = onDeleteEvent;
            $[39] = t13;
        } else {
            t13 = $[39];
        }
        t2 = displayEvents.map(t13);
        $[2] = date;
        $[3] = events;
        $[4] = hasEvents;
        $[5] = isToday;
        $[6] = onDateClick;
        $[7] = onDeleteEvent;
        $[8] = remainingCount;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        remainingCount = $[8];
        t1 = $[9];
        t2 = $[10];
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
    }
    let t7;
    if ($[40] !== remainingCount) {
        t7 = remainingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] font-medium text-gray-500 dark:text-gray-400 px-2 py-1 text-center bg-gray-100 dark:bg-gray-800/50 rounded-md",
            children: [
                "+",
                remainingCount,
                " more"
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
            lineNumber: 165,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = remainingCount;
        $[41] = t7;
    } else {
        t7 = $[41];
    }
    let t8;
    if ($[42] !== t1 || $[43] !== t2 || $[44] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
            lineNumber: 173,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t1;
        $[43] = t2;
        $[44] = t7;
        $[45] = t8;
    } else {
        t8 = $[45];
    }
    let t9;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 rounded-lg pointer-events-none transition-all duration-500", "bg-gradient-to-br from-indigo-100/0 via-transparent to-indigo-50/0 dark:from-indigo-800/0", "group-hover:from-indigo-50/60 group-hover:via-transparent group-hover:to-indigo-100/60 dark:group-hover:from-indigo-900/30 dark:group-hover:to-indigo-800/30")
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t9;
    } else {
        t9 = $[46];
    }
    let t10;
    if ($[47] !== t3 || $[48] !== t4 || $[49] !== t5 || $[50] !== t6 || $[51] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            onClick: t4,
            children: [
                t5,
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarCell.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t3;
        $[48] = t4;
        $[49] = t5;
        $[50] = t6;
        $[51] = t8;
        $[52] = t10;
    } else {
        t10 = $[52];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const CalendarGrid = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "bf33f7e99f49195873f70eb681b1213ca5767de2624cc8e8ab38f68feb838a63") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bf33f7e99f49195873f70eb681b1213ca5767de2624cc8e8ab38f68feb838a63";
    }
    const { currentDate, events, onDateClick, onDeleteEvent } = t0;
    const getDaysInMonth = _temp;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== currentDate || $[2] !== events || $[3] !== onDateClick || $[4] !== onDeleteEvent) {
        const days_0 = getDaysInMonth(currentDate);
        let t9;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = [
                {
                    short: "Sun",
                    full: "Sunday"
                },
                {
                    short: "Mon",
                    full: "Monday"
                },
                {
                    short: "Tue",
                    full: "Tuesday"
                },
                {
                    short: "Wed",
                    full: "Wednesday"
                },
                {
                    short: "Thu",
                    full: "Thursday"
                },
                {
                    short: "Fri",
                    full: "Friday"
                },
                {
                    short: "Sat",
                    full: "Saturday"
                }
            ];
            $[13] = t9;
        } else {
            t9 = $[13];
        }
        const weekDays = t9;
        const getEventsForDate = (date_0)=>events.filter((event)=>event.date.getDate() === date_0.getDate() && event.date.getMonth() === date_0.getMonth() && event.date.getFullYear() === date_0.getFullYear());
        const isWeekend = _temp2;
        t7 = "relative group/calendar";
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-2xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-700"
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                lineNumber: 69,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[14] = t8;
        } else {
            t8 = $[14];
        }
        t4 = "relative bg-gradient-to-br from-card via-card to-card/95 rounded-2xl shadow-2xl border border-border/50 overflow-hidden backdrop-blur-sm";
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                lineNumber: 76,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[15] = t5;
        } else {
            t5 = $[15];
        }
        let t10;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-muted/80 to-muted/40 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[16] = t10;
        } else {
            t10 = $[16];
        }
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative grid grid-cols-7 gap-0",
                        children: weekDays.map((day_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative p-4 text-center font-bold text-sm tracking-wide transition-all duration-300", "border-b border-border/30", isWeekend(index_0) ? "text-primary/70 bg-primary/5" : "text-muted-foreground", "group/day hover:bg-muted/60"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: day_0.full
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                                                lineNumber: 89,
                                                columnNumber: 417
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: day_0.short
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                                                lineNumber: 89,
                                                columnNumber: 471
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/50 group-hover/day:w-3/4 transition-all duration-300 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                                                lineNumber: 89,
                                                columnNumber: 519
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                                        lineNumber: 89,
                                        columnNumber: 391
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isWeekend(index_0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary/40 shadow-sm shadow-primary/30"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                                        lineNumber: 89,
                                        columnNumber: 698
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, day_0.short, true, {
                                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                                lineNumber: 89,
                                columnNumber: 126
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                        lineNumber: 89,
                        columnNumber: 43
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                lineNumber: 89,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[17] = t6;
        } else {
            t6 = $[17];
        }
        t3 = "relative bg-gradient-to-br from-background/50 to-muted/20";
        t1 = "grid grid-cols-7 gap-2 p-2";
        t2 = days_0.map((date_1, index_1)=>{
            const dayOfWeek = date_1 ? date_1.getDay() : index_1 % 7;
            const isWeekendDay = isWeekend(dayOfWeek);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", isWeekendDay && "bg-primary/[0.02] rounded-lg"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarCell"], {
                    date: date_1,
                    events: date_1 ? getEventsForDate(date_1) : [],
                    onDateClick: onDateClick,
                    onDeleteEvent: onDeleteEvent,
                    isToday: date_1 ? date_1.toDateString() === new Date().toDateString() : false
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                    lineNumber: 99,
                    columnNumber: 108
                }, ("TURBOPACK compile-time value", void 0))
            }, index_1, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
                lineNumber: 99,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        });
        $[1] = currentDate;
        $[2] = events;
        $[3] = onDateClick;
        $[4] = onDeleteEvent;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
        t8 = $[12];
    }
    let t9;
    if ($[18] !== t1 || $[19] !== t2) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t1;
        $[19] = t2;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t3 || $[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t9
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t3;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t10 || $[26] !== t4 || $[27] !== t5 || $[28] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t10;
        $[26] = t4;
        $[27] = t5;
        $[28] = t6;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-500"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-500 delay-75"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-500 delay-150"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-xl opacity-0 group-hover/calendar:opacity-100 transition-opacity duration-500 delay-200"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t13;
        $[31] = t14;
        $[32] = t15;
        $[33] = t16;
    } else {
        t13 = $[30];
        t14 = $[31];
        t15 = $[32];
        t16 = $[33];
    }
    let t17;
    if ($[34] !== t12 || $[35] !== t7 || $[36] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t12,
                t13,
                t14,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/CalendarGrid.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t12;
        $[35] = t7;
        $[36] = t8;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    return t17;
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
function _temp2(index) {
    return index === 0 || index === 6;
}
var _c;
__turbopack_context__.k.register(_c, "CalendarGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            ref: ref,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
                    lineNumber: 96,
                    columnNumber: 315
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
                    lineNumber: 96,
                    columnNumber: 340
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== ref || $[12] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    ref: ref,
                    className: t2,
                    ...props,
                    children: [
                        children,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
                    lineNumber: 103,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = children;
        $[10] = props;
        $[11] = ref;
        $[12] = t2;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
});
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
            lineNumber: 189,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            ref: ref,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
            lineNumber: 231,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1a262d7c0e208a114f14d96ddad03e8976fd922c038e9af4e16b6b8bbbe7474";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            ref: ref,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx",
            lineNumber: 274,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/calender/calender/src/app/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/calender/calender/src/app/components/ui/textarea.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const EventModal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(105);
    if ($[0] !== "2adccc5dfac99e236834e132123fc33e2a5355b4acffcf55a02ea1c99d724138") {
        for(let $i = 0; $i < 105; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2adccc5dfac99e236834e132123fc33e2a5355b4acffcf55a02ea1c99d724138";
    }
    const { isOpen, onClose, onAddEvent, selectedDate } = t0;
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[1] !== isOpen) {
        t1 = ()=>{
            if (!isOpen) {
                setTitle("");
                setDescription("");
                setIsFocused(null);
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
    if ($[11] !== selectedDate) {
        t5 = selectedDate?.getDate() || "";
        $[11] = selectedDate;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const dayOfMonth = t5;
    let t6;
    if ($[13] !== selectedDate) {
        t6 = selectedDate?.toLocaleDateString("en-US", {
            month: "short"
        }) || "";
        $[13] = selectedDate;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const month = t6;
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute-inset-20 bg-gradient-to-br from-indigo-400/20 via-indigo-300/10 to-transparent blur-3xl opacity-50 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-transparent to-transparent dark:from-indigo-900/20"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-all"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== month) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-semibold text-white/80 uppercase tracking-wider",
            children: month
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = month;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== dayOfMonth) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xl font-bold text-white leading-none",
            children: dayOfMonth
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = dayOfMonth;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t10 || $[23] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-xl flex flex-col items-center justify-center shadow-lg shadow-indigo-400/30",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "absolute -top-1 -right-1 w-4 h-4 text-indigo-500 animate-pulse"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t9,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t12;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            className: "text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent",
            children: "Add New Event"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "w-4 h-4 text-indigo-500"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== formattedDate) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                    className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300",
                    children: [
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: formattedDate
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                            lineNumber: 183,
                            columnNumber: 151
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                    lineNumber: 183,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = formattedDate;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== t14 || $[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "relative p-6 pb-4 space-y-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            t14,
                            t17
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                        lineNumber: 191,
                        columnNumber: 95
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                    lineNumber: 191,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t14;
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500 text-xs",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== isFocused) {
        t20 = isFocused === "title" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] text-indigo-500 font-normal ml-auto",
            children: "Required field"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 207,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = isFocused;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "event-title",
            className: "text-sm font-semibold flex items-center gap-2",
            children: [
                "Event Title",
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t20;
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    let t23;
    let t24;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = (e_0)=>setTitle(e_0.target.value);
        t23 = ()=>setIsFocused("title");
        t24 = ()=>setIsFocused(null);
        $[40] = t22;
        $[41] = t23;
        $[42] = t24;
    } else {
        t22 = $[40];
        t23 = $[41];
        t24 = $[42];
    }
    const t25 = isFocused === "title" && "shadow-lg shadow-indigo-400/20";
    let t26;
    if ($[43] !== t25) {
        t26 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 text-base transition-all duration-300 border border-gray-300 dark:border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 hover:border-indigo-300 dark:hover:border-indigo-600 bg-gray-50 dark:bg-gray-800/70 backdrop-blur-sm", t25);
        $[43] = t25;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== t26 || $[46] !== title) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "event-title",
            placeholder: "e.g., Team meeting, Birthday party...",
            value: title,
            onChange: t22,
            onFocus: t23,
            onBlur: t24,
            required: true,
            className: t26
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t26;
        $[46] = title;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== title) {
        t28 = title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-3 top-1/2 -translate-y-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 rounded-full bg-indigo-500 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                lineNumber: 256,
                columnNumber: 79
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 256,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = title;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] !== t27 || $[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t27;
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== isFocused) {
        t30 = isFocused === "title" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 animate-in fade-in slide-in-from-top-1 duration-300",
            children: "Give your event a clear, descriptive title"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 273,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = isFocused;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[55] !== t21 || $[56] !== t29 || $[57] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2.5",
            children: [
                t21,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t21;
        $[56] = t29;
        $[57] = t30;
        $[58] = t31;
    } else {
        t31 = $[58];
    }
    let t32;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500 dark:text-gray-400 font-normal",
            children: "(optional)"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== description || $[61] !== isFocused) {
        t33 = isFocused === "description" && description.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] text-gray-500 font-normal ml-auto",
            children: [
                description.length,
                " characters"
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 298,
            columnNumber: 68
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = description;
        $[61] = isFocused;
        $[62] = t33;
    } else {
        t33 = $[62];
    }
    let t34;
    if ($[63] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "event-description",
            className: "text-sm font-semibold flex items-center gap-2",
            children: [
                "Description",
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = t33;
        $[64] = t34;
    } else {
        t34 = $[64];
    }
    let t35;
    let t36;
    let t37;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = (e_1)=>setDescription(e_1.target.value);
        t36 = ()=>setIsFocused("description");
        t37 = ()=>setIsFocused(null);
        $[65] = t35;
        $[66] = t36;
        $[67] = t37;
    } else {
        t35 = $[65];
        t36 = $[66];
        t37 = $[67];
    }
    const t38 = isFocused === "description" && "shadow-lg shadow-indigo-400/20";
    let t39;
    if ($[68] !== t38) {
        t39 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base resize-none transition-all duration-300 border border-gray-300 dark:border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 hover:border-indigo-300 dark:hover:border-indigo-600 bg-gray-50 dark:bg-gray-800/70 backdrop-blur-sm", t38);
        $[68] = t38;
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    let t40;
    if ($[70] !== description || $[71] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                id: "event-description",
                placeholder: "Add any additional details, notes, or reminders...",
                value: description,
                onChange: t35,
                onFocus: t36,
                onBlur: t37,
                rows: 4,
                className: t39
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
                lineNumber: 339,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = description;
        $[71] = t39;
        $[72] = t40;
    } else {
        t40 = $[72];
    }
    let t41;
    if ($[73] !== isFocused) {
        t41 = isFocused === "description" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 animate-in fade-in slide-in-from-top-1 duration-300",
            children: "Add location, attendees, or any other relevant information"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 348,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = isFocused;
        $[74] = t41;
    } else {
        t41 = $[74];
    }
    let t42;
    if ($[75] !== t34 || $[76] !== t40 || $[77] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2.5",
            children: [
                t34,
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t34;
        $[76] = t40;
        $[77] = t41;
        $[78] = t42;
    } else {
        t42 = $[78];
    }
    let t43;
    let t44;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300", "hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300");
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t43;
        $[80] = t44;
    } else {
        t43 = $[79];
        t44 = $[80];
    }
    let t45;
    if ($[81] !== onClose) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: onClose,
            className: t43,
            children: [
                t44,
                "Cancel"
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = onClose;
        $[82] = t45;
    } else {
        t45 = $[82];
    }
    let t46;
    if ($[83] !== title) {
        t46 = title.trim();
        $[83] = title;
        $[84] = t46;
    } else {
        t46 = $[84];
    }
    const t47 = !t46;
    let t48;
    let t49;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400", "text-white font-medium px-5 py-2 rounded-md shadow-md shadow-indigo-400/30 hover:shadow-lg hover:shadow-indigo-400/40", "disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-w-[120px]");
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "w-4 h-4 mr-2"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t48;
        $[86] = t49;
    } else {
        t48 = $[85];
        t49 = $[86];
    }
    let t50;
    if ($[87] !== t47) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            disabled: t47,
            className: t48,
            children: [
                t49,
                "Add Event"
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[87] = t47;
        $[88] = t50;
    } else {
        t50 = $[88];
    }
    let t51;
    if ($[89] !== t45 || $[90] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-3 pt-2",
            children: [
                t45,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = t45;
        $[90] = t50;
        $[91] = t51;
    } else {
        t51 = $[91];
    }
    let t52;
    if ($[92] !== handleSubmit || $[93] !== t31 || $[94] !== t42 || $[95] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "relative p-6 pt-4 space-y-6",
            children: [
                t31,
                t42,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = handleSubmit;
        $[93] = t31;
        $[94] = t42;
        $[95] = t51;
        $[96] = t52;
    } else {
        t52 = $[96];
    }
    let t53;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[2px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[97] = t53;
    } else {
        t53 = $[97];
    }
    let t54;
    if ($[98] !== t18 || $[99] !== t52) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[500px] p-0 gap-0 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900  ",
            children: [
                t7,
                t18,
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[98] = t18;
        $[99] = t52;
        $[100] = t54;
    } else {
        t54 = $[100];
    }
    let t55;
    if ($[101] !== isOpen || $[102] !== onClose || $[103] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: onClose,
            children: t54
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/calendar/EventModal.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[101] = isOpen;
        $[102] = onClose;
        $[103] = t54;
        $[104] = t55;
    } else {
        t55 = $[104];
    }
    return t55;
};
_s(EventModal, "t1bLtUkS5/RmOvZCy8uulqNPWj4=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/integrations/firebaseConfig/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const Calendar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "cd07c20714ce645dd94d41aa4ff3c5135c28a7774e6c70951d5b225b22664937") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cd07c20714ce645dd94d41aa4ff3c5135c28a7774e6c70951d5b225b22664937";
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            if (!user) {
                return;
            }
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "events"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("uid", "==", user.uid));
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snapshot)=>{
                const fetched = snapshot.docs.map(_temp);
                setEvents(fetched);
                setLoading(false);
            });
            return ()=>unsubscribe();
        };
        t3 = [
            user
        ];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== selectedDate) {
        t4 = async (title, description)=>{
            if (!selectedDate || !user) {
                return;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "events"), {
                uid: user.uid,
                title,
                description,
                date: selectedDate,
                createdAt: new Date()
            });
            setIsModalOpen(false);
        };
        $[5] = selectedDate;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleAddEvent = t4;
    const handleDeleteEvent = _temp2;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = (date)=>{
            setSelectedDate(date);
            setIsModalOpen(true);
        };
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const handleDateClick = t5;
    let t6;
    if ($[8] !== currentDate) {
        t6 = ()=>{
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        };
        $[8] = currentDate;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const handlePrevMonth = t6;
    let t7;
    if ($[10] !== currentDate) {
        t7 = ()=>{
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        };
        $[10] = currentDate;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const handleNextMonth = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ()=>{
            setCurrentDate(new Date());
        };
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const handleToday = t8;
    const handleLogout = _temp3;
    if (loading) {
        let t9;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Loading your events..."
                }, void 0, false, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
                    lineNumber: 139,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
                lineNumber: 139,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[13] = t9;
        } else {
            t9 = $[13];
        }
        return t9;
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold",
            children: "📅 Calendar"
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-muted-foreground",
            children: [
                "Welcome, ",
                user.email
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 155,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-4",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: handleLogout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-4 h-4 group-hover/logout:rotate-12 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
                                    lineNumber: 162,
                                    columnNumber: 166
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Logout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
                            lineNumber: 162,
                            columnNumber: 117
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
                    lineNumber: 162,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== currentDate || $[18] !== handleNextMonth || $[19] !== handlePrevMonth) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarHeader"], {
            currentDate: currentDate,
            onPrevMonth: handlePrevMonth,
            onNextMonth: handleNextMonth,
            onToday: handleToday
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = currentDate;
        $[18] = handleNextMonth;
        $[19] = handlePrevMonth;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== currentDate || $[22] !== events) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$CalendarGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarGrid"], {
            currentDate: currentDate,
            events: events,
            onDateClick: handleDateClick,
            onDeleteEvent: handleDeleteEvent
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = currentDate;
        $[22] = events;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t12 || $[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t12;
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ()=>setIsModalOpen(false);
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== handleAddEvent || $[29] !== isModalOpen || $[30] !== selectedDate) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$calendar$2f$EventModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventModal"], {
            isOpen: isModalOpen,
            onClose: t15,
            onAddEvent: handleAddEvent,
            selectedDate: selectedDate
        }, void 0, false, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = handleAddEvent;
        $[29] = isModalOpen;
        $[30] = selectedDate;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t14 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background p-4 md:p-8",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/calender/calender/src/app/components/Calendar.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t14;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    return t17;
};
_s(Calendar, "Yv0jN/GmIKfQ1Dyve+cBjNmSTJg=");
_c = Calendar;
function _temp(doc) {
    return {
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        date: doc.data().date.toDate()
    };
}
async function _temp2(eventId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "events", eventId));
}
async function _temp3() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/integrations/firebaseConfig/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$Auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/Auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$components$2f$Calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/calender/calender/src/app/components/Calendar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Page = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "0bc54b2b67f38cff23421d1a8380360444f9db88c4f37d20c948a1b3fdf191c3") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0bc54b2b67f38cff23421d1a8380360444f9db88c4f37d20c948a1b3fdf191c3";
    }
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$src$2f$app$2f$integrations$2f$firebaseConfig$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], (user)=>{
                if (user) {
                    setSession(true);
                } else {
                    setSession(false);
                }
                setLoading(false);
            });
            return ()=>unsubscribe();
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (loading || session === null) {
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
                            lineNumber: 44,
                            columnNumber: 118
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$calender$2f$calender$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-muted-foreground",
                            children: "Checking session..."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
                            lineNumber: 44,
                            columnNumber: 207
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
                    lineNumber: 44,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/calender/calender/src/app/pages/Index.tsx",
                lineNumber: 44,
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
                lineNumber: 54,
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
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_s(Page, "dkuVYdQvZEJ7aX3whq8i9qrSbuA=");
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_calender_calender_src_app_d4c5a3ba._.js.map