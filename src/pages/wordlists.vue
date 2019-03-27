<template>
  <div class="flex grow">
    <window-event
      @keydown.n.ctrl="
        if (editDataId === null) 
          editDataId = userdb.push().key
        "/>
    <button
      class="btn-float btn btn-dark btn-lg"
      @click="editDataId = userdb.push().key">
      <icon icon="plus"/>
    </button>

    <wordlistEditer
      v-if="editDataId"
      :data-id="editDataId"
      @close="editDataId = null"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      editDataId: null
    }
  },
  computed: {
    ...mapGetters([
      'userdb'
    ])
  },
  components: {
    wordlistEditer: () => import('@/comp/modal/wordlistEditer')
  }
}
</script>

<style>

</style>
