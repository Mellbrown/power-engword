<template>
  <div class="v-app frame">
    <h1
      class="center-to text-info"
      :style="{
        left:'50%', top:'20%',
        transform: 'translate(-50%, -50%) scale(1.3)'
      }">
      <b><i><u>Power 영단기</u></i></b>
    </h1>
    <router-link
      tag="button"
      :to="{ name: 'main' }"
      class="center-to btn btn-primary btn-lg shadow"
      :style="{
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%) scale(1.3)'
      }">
      Start !
    </router-link>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('setActionTitle', '')
  }
}
</script>

<style>

</style>
