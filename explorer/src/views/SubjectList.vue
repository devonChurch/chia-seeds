<script>
export default {}
</script>

<template>
    <div class="explorer-subject">
        <div class="explorer-subject__top-bar"></div>
        <div class="explorer-subject__link">💻 Digital Technologies</div>
        <router-link class="explorer-subject__link" to="/maths">🧮 Maths</router-link>
        <div class="explorer-subject__link">🔬 Science</div>
        <div class="explorer-subject__link">💬 English</div>
        <div class="explorer-subject__link">🏃 Health & PE</div>
        <div class="explorer-subject__link">🙏 Humanities</div>
    </div>
</template>

<style>
.explorer-subject {
    background: var(--blue-100);
    border: 3px solid var(--blue-200);
    display: grid;
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 5rem repeat(auto-fit, 16rem);
    font-family: sans-serif;
    font-weight: bold;

}

.explorer-subject__top-bar {
    grid-column-start: 1;
    grid-column-end: -1;
}

.explorer-subject__links {
    display: grid;
    grid-template-rows: max-content;
    grid-gap: 1rem;
}

.explorer-subject__top-bar,
.explorer-subject__link {
    align-items: center;
    background: var(--blue-300);
    border: 3px solid var(--blue-400);
    color: var(--blue-900);
    display: flex;
    justify-content: center;
    padding: 2rem;
}
</style>
