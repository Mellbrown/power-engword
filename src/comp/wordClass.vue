<template>
  <div class="relative flex h-left">
    <user-ref path="wordclass" @change="wordclass = $event.val()"/>
    <select ref="select"
      class="form-control"
      v-model="val"
      @change="selectChange">
      <option> </option>
      <template v-if="wordclass">
        <option v-for="(wcls, i) in wordclass" :key="i">
          {{ wcls }}
        </option>
      </template>
      <option>리스트 편집</option>
    </select>
    <div>
      <editlist path="wordclass" class="absolute" @close="edit = false" v-if="edit"/>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'value' ],
  data () {
    return {
      wordclass: null,
      edit: false,
      val: null
    }
  },
  mounted () {
    this.val = this.value
  },      
  methods: {
    selectChange (e) {
      // let val = this.$refs.select.value
      if (this.val === '리스트 편집') {
        this.edit = true
        this.val = ''
      } else {
        console.log(this.val)
        this.$emit('confirm', this.val)
      }
    }
  }
}
</script>

<style>

</style>
