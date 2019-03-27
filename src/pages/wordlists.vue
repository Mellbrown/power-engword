<template>
  <div class="flex grow p-4">
    <div class="grow">
      <pre>{{wordlists}}</pre>
    </div>
    <router-link
      tag="button"
      :to="{name: 'newwords'}"
      class="btn btn-primary btn-lg absolute in-block shadow" 
      style="right: 16pt; bottom: 16pt; height: 42pt; width: 42pt; border-radius: 50%;">
      <icon class="midcen" icon="plus" size="lg"/>
    </router-link>
  </div>
</template>

<script>
import { database } from 'firebase'
import { mapState } from 'vuex'

export default {
  data (){
    return {
      wordlists: []
    }
  },
  mounted () {
    var self = this
    this.$store.commit('setActionTitle', '단어장 리스트')
    database().ref(this.path).on('value', dataSnapshot => {
      self.wordlists = dataSnapshot
    })
  },
  methods: {
    
  },
  computed: {
    ...mapState(['user']),
    path () { return '/' + this.user + '/wordlists' }
  }
}
</script>

<style>

</style>
