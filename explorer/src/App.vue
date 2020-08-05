<script>
export default {
    beforeMount() {
        console.log('Explorer (File) | beforeMount');
    },
    mounted() {
        console.log('Explorer (File) | mounted');
    },
    beforeDestroy() {
        console.log('Explorer (File) | beforeDestroy');
    },
    destroyed() {
        console.log('Explorer (File) | destroyed');
    },
}
</script>


<template>
    <h2>Vue | File (Explorer)</h2>
</template>