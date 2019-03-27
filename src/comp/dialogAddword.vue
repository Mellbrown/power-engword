<template>
  <transition name=fade>
    <div class="frame bg-modal">
      <div class="flex midcen bg-light rounded p-0" style="height: 600px; width: 600px;">
        <div class="bg-primary px-3 py-1 flex h-left text-light">
          <div class="oneline mr-3">
            <icon icon="search" class="mr-1"/>
            검색
          </div>
          <input class="form-control"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
