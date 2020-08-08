<script>
import { mountRootParcel } from 'single-spa';
const ExplorerMedia = () => import('explorer/Media');

export default {
    data: function() {
        return {
            explorerMediaParcelInstance: null,
            explorerMediaParcelKey: 'single-spa-parcel:explorer-media',
            isMediaModalOpen: false,
            mediaItems: ["1️⃣", "➕", "2️⃣"],
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
    <div class="content-editor">
        <div class="content-editor__main">
            <div class="content-editor__top-bar">
                <button class="content-editor__link" type="button" @click="mountMediaModal">🎉 Add</button>
            </div>
            <ul v-if="mediaItems.length" class="content-editor__items">
                <li v-for="(item, index) in mediaItems" :key="index" class="content-editor__item">{{ item }}</li>
            </ul>
        </div>
        <div v-if="isMediaModalOpen">
            <div class="content-editor__modal">
                <div :ref="explorerMediaParcelKey"></div>
            </div>
        </div>
    </div>
</template>

<style>
@import "normalize.css/normalize.css";

:root {
    --purple-100: #D1C4E9;
    --purple-200: #B39DDB;
    --purple-300: #9575CD;
    --purple-400: #7E57C2;
    --purple-500: #673AB7;
    --purple-600: #5E35B1;
    --purple-700: #512DA8;
    --purple-800: #4527A0;
    --purple-900: #311B92;
}

.content-editor {
    display: grid;
    background: var(--purple-100);
    border: 3px solid var(--purple-200);
    padding: 1rem;
    font-family: sans-serif;
    font-weight: bold;
}

.content-editor__main {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
}

.content-editor__top-bar {
    grid-column-start: 1;
    grid-column-end: -1;
}

.content-editor__modal {
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 20rem
}

.content-editor__link {
    font: inherit;
    cursor: pointer;
}

.content-editor__top-bar,
.content-editor__items,
.content-editor__link {
    align-items: center;
    background: var(--purple-200);
    border: 3px solid var(--purple-300);
    color: var(--purple-900);
    display: flex;
    justify-content: start;
    padding: 2rem;
}

.content-editor__top-bar {
    padding: 1rem;
}

.content-editor__items {
    align-items: start;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0.5rem;
}

.content-editor__item {
    font-size: 3rem;
    padding: 2rem;
    margin: 0.5rem;
}

.content-editor__item,
.content-editor__link {
    background: var(--purple-100);
    border: 3px solid var(--purple-300);
    color: var(--purple-900);
}
</style>
