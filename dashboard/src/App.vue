<script>
export default {}
</script>

<template>
    <ul class="dashboard">
        <li class="dashboard__item"></li>
        <li class="dashboard__item"></li>
        <li class="dashboard__item"></li>
        <li class="dashboard__item"></li>
    </ul>
</template>

<style>
@import "normalize.css/normalize.css";

:root {
    --pink-100: #F8BBD0;
    --pink-200: #F48FB1;
    --pink-300: #F06292;
    --pink-400: #EC407A;
    --pink-500: #E91E63;
    --pink-600: #D81B60;
    --pink-700: #C2185B;
    --pink-800: #AD1457;
    --pink-900: #880E4F;
}

.dashboard {
    background: var(--pink-100);
    border: 3px solid var(--pink-200);
    display: grid;
    list-style: none;
    margin: 0;
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-rows: repeat(auto-fit, 10rem);
    font-family: sans-serif;
    font-weight: bold;
}

.dashboard__item {
    background: var(--pink-300);
    border: 3px solid var(--pink-400);
}
</style>