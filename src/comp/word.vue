<template>
  <div class="bg-light rounded m-1 px-3 py-2"
    tabindex="0"
    @keyup.enter="$emit('edit')"
    @click="$emit('edit')">
    <h5>{{word.word}}</h5>
    <div class="flex h-left centerline" v-for="(m, i) in word.mean" :key="i">
      <span class="badge badge-info badge-pill mr-3">{{m.cls}}</span>
      {{m.mean}}
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'word', 'id' ]
}
</script>

<style>

</style>
