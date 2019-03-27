<template>
  <div class="flex grow">
    <div class="flex grow p-3 container">
      <div class="flex col-md-8 offset-md-1">
        <div class="flex h-left mb-5">
          <h5 class="oneline pr-2">단어장 제목 :</h5>
          <input class="form-control" v-bind="wordtitle">
        </div>
        <div class="card flex h-left" v-for="(word, i) in wordlist" :key="i">
          <div class="rounded bg-dark text-light">

          </div>
        </div>
        <button class="btn btn-primary" @click="editor=true">
          <icon icon="plus"/>
        </button>
        
      </div>
    </div>
    <div class="bg-dark">
      <div class="container flex h-right">
        <button class="btn btn-primary m-1 px-4">생성</button>
        <button class="btn btn-danger m-1 px-4">취소</button>
      </div>
    </div>
    <dialog-addword v-if="editor"/>
  </div>
</template>

<script>
import dialogAddword from '@/comp/dialogAddword'

export default {
  data () {
    return {
      wordtitle: '',
      wordlist: [],
      editor: false
    }
  },
  mounted () {
    var self = this
    this.$store.commit('setActionTitle', '새 단어장')
    window.addEventListener('keyup', e => {
      if (e.key === 'Escape') self.editor = false
    })
  },
  components: { dialogAddword }
}
</script>

<style>

</style>
