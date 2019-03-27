<template>
  <div class="frame bg-modal">
    <window-event @keyup.esc="
      if (title_edit)
        $emit('close')
      else
        title_edit = true
    "/>
    <div class="mx-auto w-50 h-100 p-5 flex">

      <div class="flex grow bg-light rounded" ref="con" tabindex="0">
        <div class="bg-primary px-3 py-1 text-light">
          <input class="form-control" ref="iptTitle"
            v-if="title_edit" v-model="title"
            @keyup.enter="title_edit = false;"
            >
          <h3 v-else tabindex="0" class="my-1"
            @click="title_edit = true"
            @keyup.enter="
              title_edit = true
              $nextTick(() => {
                $refs.iptTitle.focus()
              })
            ">
            {{ title }}
          </h3>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    dataId: { type: String, required: true }
  },
  data () {
    return {
      w: window,
      db: null,
      buff: null,
      title_edit: false,
      title: 'Untitled'
    }
  },
  mounted () {
    this.db = this.userdb.child(this.dataId)
    this.db.on('value', this.buffering)
    this.$nextTick(() => {
      this.$refs.con.focus()
    })
  },
  methods: {
    buffering (data) { this.buff = data }
  },
  computed: {
    ...mapGetters([
      'userdb'
    ])
  },
  watch: {
    dataId (_new, _old) {
      this.db.off('value', this.buffering)
      this.db = this.userdb.child(_new)
      this.db.on('value', this.buffering)
    }
  }
}
</script>

<style>

</style>
