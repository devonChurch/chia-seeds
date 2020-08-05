<script>
export default {
    beforeMount() {
        console.log('Explorer (Media) | beforeMount');
    },
    mounted() {
        console.log('Explorer (Media) | mounted', this);
        console.log(this.$root);
        console.log(this.$root?.potato());
        console.log(this.$root?.apple);
    },
    beforeDestroy() {
        console.log('Explorer (Media) | beforeDestroy');
    },
    destroyed() {
        console.log('Explorer (Media) | destroyed');
    },
}
</script>


<template>
    <h2>Vue | Media (Explorer)</h2>
</template>