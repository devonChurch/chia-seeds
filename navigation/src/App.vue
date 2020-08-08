<script>
export default {}
</script>

<template>
    <nav class="nav">
        <router-link class="nav__link" to="/">📋 Dashboard</router-link>
        <router-link class="nav__link" to="/library">📁 Library</router-link>
        <router-link class="nav__link" to="/editor">🖍️ Editor</router-link>
    </nav>
</template>

<style>
@import "normalize.css/normalize.css";

:root {
    --teal-100: #B2DFDB;
    --teal-200: #80CBC4;
    --teal-300: #4DB6AC;
    --teal-400: #26A69A;
    --teal-500: #009688;
    --teal-600: #00897B;
    --teal-700: #00796B;
    --teal-800: #00695C;
    --teal-900: #004D40;
}

.nav {
    background: var(--teal-100);
    border: 3px solid var(--teal-200);
    display: grid;
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-rows: repeat(auto-fit, 5rem);
    font-family: sans-serif;
    font-weight: bold;
}

.nav__link {
    align-items: center;
    background: var(--teal-300);
    border: 3px solid var(--teal-400);
    color: var(--teal-900);
    display: flex;
    justify-content: start;
    padding: 2rem;
}
</style>
