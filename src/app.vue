<template lang="pug">
  v-app.application(:dark="isDark")
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private get isDark(): boolean {
    return this.$store.state.Layout.isDark;
  }
}
</script>

<style lang="sass">
  .application
    background: #f2f5f7
  .theme--light
    &.v-toolbar
      color: #042338
</style>
