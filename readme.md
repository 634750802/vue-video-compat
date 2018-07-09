# Vue video component compat

## Usage

```bash
# install via npm
npm i vue-video-component-compat -D

```

```js

// main.js

import Vue from 'vue'
import VideoCompat from 'vue-video-component-compat'

Vue.use(VideoCompat)

```

```vue
some.vue
<template>
    <VideoCompat src="xxx.m3u8 || xxx.flv" v-bind:sync="videoInfo"/>
</template>
<script>
export default {
    data () {
        videoInfo: {
            paused: false,
            volume: null,
            currentTime: null,
            playbackRate: null
        }
    }
}
</script>

```