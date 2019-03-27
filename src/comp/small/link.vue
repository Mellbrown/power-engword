<template>
  <li class="nav-link" :class="active ? 'active' : ''">
    <router-link
      tag="a"
      class="nav-link"
      :to="link">
      {{ name }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, default: () => false },
    name: { type: String, default: () => '' },
    link: { type: String, default: () => '/'}
  }
}
</script>

<style>

</style>
