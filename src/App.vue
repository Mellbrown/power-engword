<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <router-link class="navbar-brand" to="/">
        <icon icon="file-word"/>
      </router-link>
      <ul class="navbar-nav">
        <navlink name="내 단어장" link="/wordlists"/>
      </ul>
    </nav>
    <div class="flex grow relative bg-warning">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  mounted () {

  },
  components: {
    navlink: () => import('@/comp/small/link')
  }
}
</script>
