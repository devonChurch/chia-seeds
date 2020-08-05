import { registerApplication, start } from "single-spa";

registerApplication({
    name: "navigation-header",
    app: () => import("navigation/NavigationHeader"),
    activeWhen: (location) => location.pathname.startsWith("/"),
    customProps: {}
});

registerApplication({
    name: "file-library-file-explorer",
    app: () => import("fileLibrary/FileExplorer"),
    activeWhen: (location) => location.pathname.startsWith("/library"),
    customProps: {}
});

registerApplication({
    name: "dashboard-landing-page",
    app: () => import("dashboard/LandingPage"),
    activeWhen: (location) => location.pathname === "/",
    customProps: {}
});

registerApplication({
    name: "content-preview",
    app: () => import("content/Preview"),
    activeWhen: (location) => location.pathname.startsWith("/preview"),
    customProps: {}
});

registerApplication({
    name: "content-editor",
    app: () => import("content/Editor"),
    activeWhen: (location) => location.pathname.startsWith("/editor"),
    customProps: {}
});

start();
