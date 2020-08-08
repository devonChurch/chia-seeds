<script>
export default {
  beforeMount() {
    console.log("Explorer (Media) | beforeMount");
  },
  mounted() {
    console.log("Explorer (Media) | mounted");
  },
  beforeDestroy() {
    console.log("Explorer (Media) | beforeDestroy");
  },
  destroyed() {
    console.log("Explorer (Media) | destroyed");
  },
  data: function() {
    return {
      mediaItems: [
        "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣",
        "➕", "➖", "➗", "✖️",
      ],
    };
  },
  methods: {
    selectMediaItem(item) {
      this.$root.addMediaItem(item);
    },
  },
};
</script>

<template>
  <div class="explorer-media">
    <ul v-if="mediaItems.length" class="explorer-media__items">
      <li v-for="(item, index) in mediaItems" :key="index" class="explorer-media__item">
        <button type="button" @click="selectMediaItem(item)" class="explorer-media__link">{{ item }}</button>
      </li>
    </ul>
  </div>
</template>

<style>
@import "normalize.css/normalize.css";

:root {
    --blue-100: #B3E5FC;
    --blue-200: #81D4FA;
    --blue-300: #4FC3F7;
    --blue-400: #29B6F6;
    --blue-500: #03A9F4;
    --blue-600: #039BE5;
    --blue-700: #0288D1;
    --blue-800: #0277BD;
    --blue-900: #01579B;
}

.explorer-media {
    display: grid;
    background: var(--blue-100);
    border: 3px solid var(--blue-200);
    padding: 1rem;
    font-family: sans-serif;
    font-weight: bold;
}

.explorer-media__items {
    align-items: start;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0.5rem;
}

.explorer-media__item {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    height: 100%;
    padding: 0.5rem;
}

.explorer-media__link {
    background: var(--blue-200);
    border: 3px solid var(--blue-300);
    color: var(--blue-900);
    font-size: 3rem;
    padding: 2rem;
    cursor: pointer;
}
</style>
