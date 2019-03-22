<template>
  <div class="flex grow m-4">
    <div class="container">
      <div class="row">
        <h3 class="col-sm-12 bg-secondary rounded py-1 text-light">메뉴</h3>
      </div>
      <div class="row">
        <div
          class="col-md-3 p-2"
          v-for="(item, i) in menus" :key="i">
          <router-link
            tag="button"
            :to="{name: item.name}"
            style="height: 80px;"
            class="btn btn-primary w-100 p-3">
            <icon
              v-if="item.icon" :icon="item.icon" size="lg" class="absolute"
              style="right: 20px; bottom: 15px; opacity: 0.8;" />
            <h6>{{item.title}}</h6>
            <div>{{item.desc}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { icon: 'file-medical', title: '새 영단어 추가', name: 'home' },
        { title: '안녕', name: 'home' },
        { title: '안녕', name: 'home' },
        { title: '안녕', name: 'home' },
        { title: '안녕', name: 'home' },
        { title: '안녕', name: 'home' }
      ]
    }
  },
  mounted () {
    this.$store.commit('setActionTitle', '메인페이지')
  }
}
</script>

<style>

</style>
