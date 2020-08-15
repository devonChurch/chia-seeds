import * as singleSpa from "single-spa";
import { testActiveStatus, is, isNot } from "./utils";

const { registerApplication, start } = singleSpa;
const contentPreview = /^\/library\/.*\/preview/;
const contentEditor = /^\/editor\//
const explorerFile = /^\/library\//;
const dashboard = /^\/$/; // Start and End with a single slash "/".
const isolationLayout = [contentPreview];
const standardLayout = [explorerFile, dashboard, contentEditor];


window.addEventListener('single-spa:before-mount-routing-event', (event) => {
    Object.entries(event.detail.newAppStatuses).forEach(([key, value]) => 
        document.body.setAttribute(`data-${key}`, value))
});

registerApplication({
    name: "navigation-header",
    app: () => import("navigation/Header"),
    activeWhen: testActiveStatus(isNot(isolationLayout)),
    customProps: { singleSpa }
});

registerApplication({
    name: "explorer-file",
    app: () => import("explorer/File"),
    activeWhen: testActiveStatus([is(explorerFile), isNot(isolationLayout)]),
    customProps: { singleSpa }
});

registerApplication({
    name: "dashboard-landing-page",
    app: () => import("dashboard/LandingPage"),
    activeWhen: testActiveStatus(is(dashboard)),
    customProps: { singleSpa }
});

registerApplication({
    name: "content-preview",
    app: () => import("content/Preview"),
    activeWhen: testActiveStatus(is(contentPreview)),
    customProps: { singleSpa }
});

registerApplication({
    name: "content-editor",
    app: () => import("content/Editor"),
    activeWhen: testActiveStatus([is(contentEditor)]),
    customProps: { singleSpa }
});

start();
