<template>
</template>

<script>
import { mapState } from 'vuex'
import { database } from 'firebase'

export default {
  props: { path: { type: String, default: () => '' }},
  data () { return { db: null } },
  mounted () {
    this.db = database().ref('user').child(this.user).child(this.path)
    if (this.$listeners['change']) this.db.on('value', this.onChanged)
    if (this.$listeners['once']) this.db.once('value', this.onOnce)
    if (this.$listeners['db']) this.$emit('db', this.db)
    if (this.$listeners['user']) this.$emit('user', database().ref('user').child(this.user))
    if (this.$listeners['here']) this.$emit('here', database().ref('user').child(this.user).child(this.path))
  },
  methods: {
    onChanged (data) {
      this.$emit('change', data)
    },
    onOnce (data) {
      this.$emit('once', data)
    }
  },
  watch: {
    path () {
      if (this.$listeners['change']) {
        this.db.off('value', this.onChanged)
        this.db = database().ref('user').child(this.user).child(this.path)
        this.db.on('value', this.onChanged)
        this.$emit('db', this.db)
        this.$emit('user', database().ref('user').child(this.user))
        this.$emit('here', database().ref('user').child(this.user).child(this.path))
      }
    }
  },
  computed: { ...mapState(['user']) },
  beforeDestroy () {
    if (this.$listeners['change']) this.db.off('value', this.onChanged)
  }
}
</script>

<style>

</style>
