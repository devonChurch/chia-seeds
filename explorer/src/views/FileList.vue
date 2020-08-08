<script>
export default {}
</script>

<template>
    <div class="explorer-file">
        <div class="explorer-file__top-bar"></div>
        <div class="explorer-file__side-bar"></div>
        <div class="explorer-file__links">
            <div class="explorer-file__link">📁 Junior Mathematics</div>
            <div class="explorer-file__link">📁 Pre-Tests</div>
            <router-link class="explorer-file__link" to="preview/term-1-exam" append>📄 Term-1 Exam</router-link>
            <div class="explorer-file__link">📄 Term-2 Exam</div>
            <div class="explorer-file__link">📁 Mathematics Specialist</div>
            <div class="explorer-file__link">📄 Algebra Test-1</div>
            <div class="explorer-file__link">📄 Algebra Test-2</div>
            <div class="explorer-file__link">📄 Algebra Test-3</div>
        </div>
    </div>
</template>

<style>
.explorer-file {
    background: var(--blue-100);
    border: 3px solid var(--blue-200);
    display: grid;
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 5rem 1fr;
    font-family: sans-serif;
    font-weight: bold;

}

.explorer-file__top-bar {
    grid-column-start: 1;
    grid-column-end: -1;
}

.explorer-file__side-bar {
    height: 16rem;
}

.explorer-file__links {
    display: grid;
    grid-template-rows: max-content;
    grid-gap: 1rem;
}

.explorer-file__top-bar,
.explorer-file__side-bar,
.explorer-file__link {
    align-items: center;
    background: var(--blue-300);
    border: 3px solid var(--blue-400);
    color: var(--blue-900);
    display: flex;
    justify-content: start;
    padding: 2rem;
}
</style>
