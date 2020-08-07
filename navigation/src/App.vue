<script>
export default {}
</script>

<template>
    <nav class="nav">
        <router-link class="nav__link" to="/">Dashboard</router-link>
        <router-link class="nav__link" to="/library">Library</router-link>
        <router-link class="nav__link" to="/editor">Editor</router-link>
    </nav>
</template>

<style>
@import "normalize.css/normalize.css";

:root {
    --gold-100: #FFF9C4;
    --gold-200: #FFF59D;
    --gold-300: #FFF176;
    --gold-400: #FFEE58;
    --gold-500: #FFEB3B;
    --gold-600: #FDD835;
    --gold-700: #FBC02D;
    --gold-800: #F9A825;
    --gold-900: #F57F17;
}

.nav {
    background: var(--gold-100);
    border: 3px solid var(--gold-200);
    display: grid;
    min-height: 100vh;
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-rows: repeat(auto-fit, 4rem);
    font-family: sans-serif;
    font-weight: bold;
}

.nav__link {
    align-items: center;
    background: var(--gold-300);
    border: 3px solid var(--gold-400);
    color: var(--gold-900);
    display: flex;
    justify-content: center;
}

.nav__link[aria-current="page"] {
    background: var(--gold-500);
    border-color: var(--gold-600);
    color: var(--gold-900);
}
</style>
