<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark flex h-left">
      <router-link class="navbar-brand" :to="{name: 'home'}">
        <icon icon="file-word"/>
      </router-link>
      <div class="navbar-text">{{action_title}}</div>
    </nav>
    <div class="flex grow relative bg-warning">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'action_title'
    ])
  }
}
</script>
