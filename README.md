# Chia Seeds 🌱 🌰 🐦

## What 👋

An exploration into Micro Front-end compositions to understand the granularity teams can collaborate within the same application context.

## How 💡

Three core layout scenarios were created to encapsulated business requirements.

### Standard
**Primary navigation with content area**

<img width="200" alt="Standard layout" src="https://user-images.githubusercontent.com/15273233/95007149-d384e700-0668-11eb-95aa-90b572c767f1.png">

### Isolation
**No navigation, only content**

<img width="200" alt="Isolation layout" src="https://user-images.githubusercontent.com/15273233/95007148-d2ec5080-0668-11eb-8040-ade9f2dc1a4d.png">

### Modal
**Supplementary content overlay**

<img width="200" alt="Modal layout" src="https://user-images.githubusercontent.com/15273233/95007146-d1bb2380-0668-11eb-945b-dbaee6ae6db2.png">

Micro Front-end _"slices"_ were identified and allocated under five color-coded cross-functional teams.

![Teams](https://user-images.githubusercontent.com/15273233/95007177-28c0f880-0669-11eb-8cb9-4a8efb1de1e8.png)

A user flow was created to simulate the _"slices"_ in the context of our required layout scenarios.

![User flow](https://user-images.githubusercontent.com/15273233/95007373-73437480-066b-11eb-8085-897156444cb8.png)

Each Micro Front-end _"slice"_ runs completely independently and composes into the core Singe Page Application shell via two main technology paradigms.

### [Single-SPA](https://single-spa.js.org/)
**A lightweight Micro Front-end lifecycle orchestrator**

### [Federated Modules](https://webpack.js.org/concepts/module-federation/)
**Run-time dependency reconciliation**

![Local development](https://user-images.githubusercontent.com/15273233/95007419-49d71880-066c-11eb-9b7f-f10417479db3.png)

## Conclusion 👍

Combining Single-SPA Root and Parcel application composition alongside Federated Modules run-time Micro Front-end injection is a powerful pattern with production potential.

![demo](https://user-images.githubusercontent.com/15273233/95007606-01205f00-066e-11eb-8722-ab53aa86a574.gif)



