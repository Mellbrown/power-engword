<template>
  <div tabindex="0" @keyup.enter="edit = true; $nextTick(() => {$refs.ipt.focus()})">
    <input ref="ipt" v-if="edit"
      class="form-control"
      @input="submit"
      @keyup.enter.stop="edit = false; $emit('confirm', $refs.ipt.value)"
      @keyup.esc.stop="edit = false; $emit('cancle')"
      @blur="edit = false; $emit('confirm', $refs.ipt.value)"
      :value="value" >
    <component
      :is="dTag ? dTag : 'div'" :class="dClass" :style="dStyle" v-if="!edit">
      {{ value ? value : '-'}}
    </component>
  </div>
</template>

<script>
export default {
  props: [ 'd-tag', 'd-class', 'd-style', 'value' ],
  data () {
    return {
      edit: false
    }
  },
  methods: {
    submit (e) {
      this.$emit('input', this.$refs.ipt.value)
    }
  }
}
</script>

<style>

</style>
