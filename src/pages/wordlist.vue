<template>
  <div class="flex grow frame overflow-hidden">
    <user-ref path="wordlist" @here="here = $event" @change="wordlist = $event.val()"/>

    <div class="container-mobile flex grow mt-3">
      <div class="input-group mb-5">
        <div class="input-group-prepend">
          <div class="input-group-text"><icon icon="search"/></div>
        </div>
        <input class="form-control" placeholder="단어 검색">
      </div>

      <div class="text-right">단어 총: {{wordlist.length}}</div>
      <div>
        <word :word="word" v-for="(word, key) in wordlist" :key="key" @edit="wordKey = key"/>
      </div>

      <button class="btn btn-primary mt-3"
        @click="wordKey = here.push().key">
        단어 추가
      </button>
    </div>

    <editword :word-key="wordKey" v-if="wordKey" @close="wordKey = null"/>
  </div>
</template>

<script>
import editword from '@/comp/modal/editword'
import word from '@/comp/word'

export default {
  data () {
    return {
      here: null,
      wordlist: null,
      wordKey: null
    }
  },
  components: { editword, word }
}
</script>

<style>

</style>
