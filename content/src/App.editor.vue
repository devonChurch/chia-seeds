<script>
import { mountRootParcel } from 'single-spa';
const ExplorerFile = () => import('explorer/File');

export default {
    async mounted() {
        const parcelProps = {
            domElement: document.getElementById('single-spa-parcel:explorer-file')
        };
        const parcelConfig = await ExplorerFile();
        this.explorerFileParcel = mountRootParcel(parcelConfig, parcelProps);
    },
    async beforeDestroy() {
        await this.explorerFileParcel.unmount();
    }
}
</script>

<template>
    <div>
        <h2>Vue | Content Editor (Dashboard)</h2>
        <div id="single-spa-parcel:explorer-file"></div>
    </div>
</template>