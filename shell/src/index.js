import * as singleSpa from "single-spa";
import { testActiveStatus, is, isNot } from "./utilities/routes";

const { registerApplication, start } = singleSpa;
const contentPreview = /^\/library\/.*\/preview/;
const contentEditor = /^\/editor\//
const explorerFile = /^\/library\//;
const dashboard = /^\/$/; // Start and End with a single slash "/".
const isolationLayout = [contentPreview];
const standardLayout = [explorerFile, dashboard, contentEditor];
const customProps = {};

window.addEventListener('single-spa:before-mount-routing-event', (event) => {
    Object.entries(event.detail.newAppStatuses).forEach(([key, value]) => 
        document.body.setAttribute(`data-${key}`, value))
});

registerApplication({
    name: "navigation-header",
    app: async () => import("navigation/Header"),
    // app: async () => {
    //     const Header = await import("navigation/Header");
    //     console.log('Header', Header);
    //     return Header;

    // },
    activeWhen: testActiveStatus(isNot(isolationLayout)),
    customProps
});

registerApplication({
    name: "explorer-file",
    app: () => import("explorer/File"),
    activeWhen: testActiveStatus([is(explorerFile), isNot(isolationLayout)]),
    customProps
});

registerApplication({
    name: "dashboard-landing-page",
    // app: () => import("dashboard/LandingPage").then(module => {
    //     console.log('got dashboard #1', module);
    //     return module;
    // }).then(module => {
    //     console.log('got dashboard #2', module);
    //     return module;
    // }),
    app: async () => {
        const topLevelAwait = await import("dashboard/LandingPage");
        console.log('topLevelAwait', topLevelAwait);
        console.log('topLevelAwait.default', topLevelAwait.default);

        return topLevelAwait.default;
        
        // const LandingPage = await topLevelAwait.default();
        // console.log('LandingPage', LandingPage);
        
        // return LandingPage;

    },
    activeWhen: testActiveStatus(is(dashboard)),
    customProps
});

registerApplication({
    name: "content-preview",
    app: () => import("content/Preview"),
    activeWhen: testActiveStatus(is(contentPreview)),
    customProps
});

registerApplication({
    name: "content-editor",
    app: () => import("content/Editor"),
    activeWhen: testActiveStatus([is(contentEditor)]),
    customProps
});

start();
