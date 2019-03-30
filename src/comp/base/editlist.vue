<template>
  <div tabindex="0" @keyup.esc.stop="$emit('close')" style="min-width: 200px;">
    <user-ref :path="path" @change="list = $event.val()" @here="here = $event"/>
    <ul class="list-group shadow">
      <li class="flex h-left between centerline list-group-item"
        v-for="(item, key) in list" :key="key">
        <cvt-input :value="item" @confirm="here.child(key).set($event)" d-class="oneline"/>
        <span class="badge badge-danger badge-pill" tabindex="0" @click="here.child(key).set(null)">-</span>
      </li>
      <li class="list-group-item oneline">
        <button class="btn btn-link p-0" @click="here.push().set('-')">추가하기...</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [ 'path' ],
  data () {
    return {
      here: null,
      list: null
    }
  }
}
</script>

<style>

</style>
