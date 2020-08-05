<script>
import { mountRootParcel } from 'single-spa';
const Library = () => import('fileLibrary/FileExplorer');

export default {
    mounted() {
        const parcelProps = {
            domElement: document.getElementById('file-library-media-picker')
        };

        Library().then((parcelConfig) => {
            mountRootParcel(parcelConfig, parcelProps)
        })
    }
}

</script>

<template>
    <div>
        <h2>Vue | Content Editor (Dashboard)</h2>
        <div id="file-library-media-picker"></div>
    </div>
</template>