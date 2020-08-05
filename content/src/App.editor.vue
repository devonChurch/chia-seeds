<script>
import { mountRootParcel } from 'single-spa';
const ExplorerMedia = () => import('explorer/Media');

export default {
    async mounted() {
        const parcelProps = {
            domElement: document.getElementById('single-spa-parcel:explorer-media')
        };
        const parcelConfig = await ExplorerMedia();
        this.explorerMediaParcel = mountRootParcel(parcelConfig, parcelProps);
    },
    async beforeDestroy() {
        await this.explorerMediaParcel.unmount();
    }
}
</script>

<template>
    <div>
        <h2>Vue | Content Editor (Dashboard)</h2>
        <div id="single-spa-parcel:explorer-media"></div>
    </div>
</template>