<template>
  <transition name="modal">
    <div class="modal bg-light rounded shadow flex grow" v-if="m">
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      m: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.m = true
    })
  },
  beforeDestroy () {
    this.m = false
  }
}
</script>

<style lang="scss">
.modal {
  position: absolute;
  display: inline-block;
  top: 100%;
  left: 50%;
  width: 100%;
  max-width: 600px;
  height: 70%;
  transform: translate(-50%, -105%);
}

.modal-enter, .modal-leave-to {
  transform: translate(-50%, 0%);
}

.modal-enter-to, .modal-leave {
  transform: translate(-50%, -105%);
}

.modal-enter-active, .modal-leave-active {
  transition: transform ease-out 0.3s;
}
</style>
