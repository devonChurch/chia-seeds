<script>
export default {
    beforeMount() {
        console.log('Explorer (Media) | beforeMount');
    },
    mounted() {
        console.log('Explorer (Media) | mounted');
    },
    beforeDestroy() {
        console.log('Explorer (Media) | beforeDestroy');
    },
    destroyed() {
        console.log('Explorer (Media) | destroyed');
    },
    data: function() {
        return {
            mediaItems: ["🍎", "🍌", "🥔"]
        }
    },
    methods: {
        selectMediaItem(item) {
            this.$root.addMediaItem(item);
        }
    }
}
</script>


<template>
    <div>
        <h2>Vue | Media (Explorer)</h2>
        <ul v-if="mediaItems.length">
            <li v-for="(item, index) in mediaItems" :key="index">
                <button type="button" @click="selectMediaItem(item)">{{ item }}</button>
            </li>
        </ul>
    </div>
</template>