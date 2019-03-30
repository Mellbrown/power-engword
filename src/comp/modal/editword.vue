<template>
  <modal @close="$emit('close')">
    <user-ref :path="`wordlist/${wordKey}`" @here="here = $event" @once="onOnce"/>
    <window-event @keyup.esc.stop="$emit('close')"/>
    <div class="flex grow p-5">
      <cvt-input d-tag="h3" class="mb-3" :value="word" @confirm="word = $event"/>
      <div class="mb-3">
        <div class="tr" v-for="(mn, i) in mean" :key="i">
          <div>
            <word-class v-model="mn.cls" @confirm="here.child(`mean/${i}/cls`).set($event)"/>
          </div>
          <div class="flex centerline">
            <cvt-input v-model="mn.mean" @confirm="here.child(`mean/${i}/mean`).set($event)"/>
          </div>
        </div>
      </div>
      <button class="btn btn-primary mb-3" @click="mean.push({cls: '', mean: ''})">뜻 추가</button>
      <button class="btn btn-danger" @click="here.set(null); $emit('close')">단어 삭제</button>
    </div>
  </modal>
</template>

<script>
import wordClass from '@/comp/wordClass'

export default {
  props: [ 'word-key' ],
  data () {
    return {
      here: null,
      word: null,
      mean: []
    }
  },
  methods: {
    onOnce (snapShot) {
      let data = snapShot.val() || {}
      this.word = data.word || null
      this.mean = data.mean || []
    }
  },
  watch: {
    word () {
      this.here.child('word').set(this.word)
    }
  },
  components: { wordClass }
}
</script>

<style lang="scss" scoped>
.tr {
  display: flex;
  flex-direction: row;
  border: solid 1pt black;
  border-bottom: 0pt;

  &>div {
    padding: 0.25rem 1rem;
    flex-grow: 1;
    &:nth-child(1) {
      border-right: solid 1pt black;
      text-align: right;
      flex-grow: 0;
      width: 150px;
    }
  }

  &:last-child {
    border-bottom: solid 1pt black;
  }
}
</style>
