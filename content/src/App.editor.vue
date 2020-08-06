<script>
import { mountRootParcel } from 'single-spa';
const ExplorerMedia = () => import('explorer/Media');

export default {
    async mounted() {
        const domElement = this.$refs[this.explorerMediaParcel];
        const parcelProps = { domElement, addMediaItem: this.addMediaItem.bind(this) };
        const parcelConfig = await ExplorerMedia();
        this.explorerMediaParcel = mountRootParcel(parcelConfig, parcelProps);
    },
    async beforeDestroy() {
        await this.explorerMediaParcel.unmount();
    },
    data: function() {
        return {
            explorerMediaParcel: 'single-spa-parcel:explorer-media',
            mediaItems: []
        }
    },
    methods: {
        addMediaItem(item) {
            this.mediaItems.push(item);
        }
    }
}
</script>

<template>
    <div>
        <h2>Vue | Content Editor (Dashboard)</h2>
        <div :ref="explorerMediaParcel"></div>
        <ul v-if="mediaItems.length">
            <li v-for="(item, index) in mediaItems" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>