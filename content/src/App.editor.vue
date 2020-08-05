<script>
import { mountRootParcel } from 'single-spa';
const FileExplorer = () => import('fileLibrary/FileExplorer');

export default {
    async mounted() {
        const parcelProps = {
            domElement: document.getElementById('file-library-media-picker')
        };
        const parcelConfig = await FileExplorer();
        this.fileExplorerParcel = mountRootParcel(parcelConfig, parcelProps);
    },
    async beforeDestroy() {
        await this.fileExplorerParcel.unmount();
    }
}
</script>

<template>
    <div>
        <h2>Vue | Content Editor (Dashboard)</h2>
        <div id="file-library-media-picker"></div>
    </div>
</template>