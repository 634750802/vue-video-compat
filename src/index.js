import Video from 'vue-video-component'

export default {
  install (Vue, {isLive} = {}) {
    Vue.component('VideoCompat', Video)

    Video.$use('m3u8', {
      async create (vm, src) {
        const Hls = (await import('hls.js')).default
        if (Hls.isSupported()) {
          Vue.set(vm, 'videoSrc')
          const hls = vm.$hls = new Hls({})
          hls.loadSource(src)
          vm.$nextTick(function () {
            hls.attachMedia(vm.video)
          })
        }
      },
      update (vm, src) {
        if (vm.$hls) {
          vm.$hls.loadSource(src)
        }
      },
      destroy (vm) {
        if (vm.$hls) {
          vm.$hls.detachMedia()
          vm.$hls.destroy()
        }
      }
    })

    Video.$use('flv', {
      async create (vm, src) {
        const Flv = vm.$Flv = (await import('flv.js')).default
        if (Flv.isSupported()) {
          Vue.set(vm, 'videoSrc', null)
          const flv = vm.$flv = Flv.createPlayer({
            type: 'flv',
            isLive,
            url: src
          })
          vm.$nextTick(function () {
            flv.attachMediaElement(vm.video)
          })
        }
      },
      update (vm, src) {
        const Flv = vm.$Flv
        if (Flv.isSupported()) {
          const flv = Flv.createPlayer({
            type: 'flv',
            isLive,
            url: src
          })
          if (vm.$flv) {
            vm.$flv.detachMediaElement()
            vm.$flv.destroy()
          }
          flv.attachMediaElement(vm.video)
          vm.$flv = flv
        }
      },
      destroy (vm) {
        if (vm.$flv) {
          vm.$flv.detachMediaElement()
          vm.$flv.destroy()
        }
      }
    })
  }
}
