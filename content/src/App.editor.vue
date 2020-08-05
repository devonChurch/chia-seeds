<script>
import { mountRootParcel } from 'single-spa';
const ExplorerMedia = () => import('explorer/Media');

export default {
    async mounted() {
        const domElement = this.$refs[this.explorerMediaParcel];
        const parcelProps = { domElement };
        const parcelConfig = await ExplorerMedia();
        this.explorerMediaParcel = mountRootParcel(parcelConfig, parcelProps);
    },
    async beforeDestroy() {
        await this.explorerMediaParcel.unmount();
    },
    data: function() {
        return {
            explorerMediaParcel: 'single-spa-parcel:explorer-media'
        }
    }
}
</script>

<template>
    <div>
        <h2>Vue | Content Editor (Dashboard)</h2>
        <div :ref="explorerMediaParcel"></div>
    </div>
</template>