<script>
import { mountRootParcel } from 'single-spa';
const ExplorerMedia = () => import('explorer/Media');

export default {
    data: function() {
        return {
            explorerMediaParcelInstance: null,
            explorerMediaParcelKey: 'single-spa-parcel:explorer-media',
            isMediaModalOpen: false,
            mediaItems: [],
        }
    },
    methods: {
        async addMediaItem(item) {
            this.mediaItems.push(item);
            this.isMediaModalOpen = false;
            await this.explorerMediaParcelInstance.unmount();
        },
        async mountMediaModal() {
            this.isMediaModalOpen = true;
            /**
             * Because the Parcel DOM element is wrapped in an `v-if` it is NOT
             * ready to be found via a $ref as we are in the same tick that reveals
             * the element. In that regard, wait one tick for the element to be
             * rendered to the page then we can grab it to inject our Parcel into.
             */
            await this.$root.$nextTick();

            const domElement = this.$refs[this.explorerMediaParcelKey];
            const parcelProps = { domElement, addMediaItem: this.addMediaItem.bind(this) };
            const parcelConfig = await ExplorerMedia();
            
            this.explorerMediaParcelInstance = mountRootParcel(parcelConfig, parcelProps);
        },
    }
}
</script>

<template>
    <div>
        <h2>Vue | Content Editor (Dashboard)</h2>
        <button type="button" @click="mountMediaModal">Add</button>
        <div v-if="isMediaModalOpen">
            <h3>Pick Media</h3>
            <div :ref="explorerMediaParcelKey"></div>
        </div>
        <ul v-if="mediaItems.length">
            <li v-for="(item, index) in mediaItems" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>