import { registerApplication, start } from "single-spa";

registerApplication(
  "navigation-header",
  () => import("navigation/NavigationHeader"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "file-library-file-explorer",
  () => import("fileLibrary/FileExplorer"),
  (location) => location.pathname.startsWith("/library")
);

registerApplication(
  "dashboard-landing-page",
  () => import("dashboard/LandingPage"),
  (location) => location.pathname === "/"
);

registerApplication(
  "content-preview",
  () => import("content/Preview"),
  (location) => location.pathname.startsWith("/preview")
);

registerApplication(
  "content-editor",
  () => import("content/Editor"),
  (location) => location.pathname.startsWith("/editor")
);

start();
