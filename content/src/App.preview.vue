<script>
export default {
    data: function() {
        return {
            mediaItems: ["1️⃣", "➕", "2️⃣"],
        }
    },
}
</script>

<template>
    <div class="content-preview">
        <div class="content-preview__top-bar">
            <router-link class="content-preview__link" to="/editor/term-1-exam">🖍️ Edit</router-link>
        </div>
        <ul v-if="mediaItems.length" class="content-preview__items">
            <li v-for="(item, index) in mediaItems" :key="index" class="content-preview__item">{{ item }}</li>
        </ul>
    </div>
</template>

<style>
@import "normalize.css/normalize.css";

:root {
    --purple-100: #D1C4E9;
    --purple-200: #B39DDB;
    --purple-300: #9575CD;
    --purple-400: #7E57C2;
    --purple-500: #673AB7;
    --purple-600: #5E35B1;
    --purple-700: #512DA8;
    --purple-800: #4527A0;
    --purple-900: #311B92;
}

.content-preview {
    background: var(--purple-100);
    border: 3px solid var(--purple-200);
    display: grid;
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
    font-family: sans-serif;
    font-weight: bold;

}


.content-preview__top-bar,
.content-preview__items,
.content-preview__link {
    align-items: center;
    background: var(--purple-200);
    border: 3px solid var(--purple-300);
    color: var(--purple-900);
    display: flex;
    justify-content: start;
    padding: 2rem;
}

.content-preview__top-bar {
    grid-column-start: 1;
    grid-column-end: -1;
    padding: 1rem;
}

.content-preview__items {
    align-items: start;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0.5rem;
}

.content-preview__item {
    font-size: 3rem;
    padding: 2rem;
    margin: 0.5rem;
}

.content-preview__item,
.content-preview__link {
    background: var(--purple-100);
    border: 3px solid var(--purple-300);
    color: var(--purple-900);
}
</style>
