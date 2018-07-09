<template>
  <div id="app">
    <VideoCompat controls style="height: 400px" src="http://1255927758.vod2.myqcloud.com/87a9bf7avodtransgzp1255927758/1c51898d4564972819039226506/v.f230.m3u8?t=96ddf19b&sign=8da3bc1fd8806d2c7106a80efa78e41a" @abort="onError" @error="onError"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    onError (err) {
      console.error(err)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
