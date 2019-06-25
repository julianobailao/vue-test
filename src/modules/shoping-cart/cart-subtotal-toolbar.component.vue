<template lang="pug">
  v-toolbar.cardt-subtotal-toolbar(color="white" flat height="60")
    .cardt-subtotal-toolbar__subtotal-label Cart Subtotal:
    v-spacer
    v-toolbar-title.cardt-subtotal-toolbar__subtotal-value CAD$ {{ subtotal }}
    v-toolbar-items
      v-btn.cardt-subtotal-toolbar__btn-checkout.ml-3(large dark flat) Place your order
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CardSubtotalToolbar extends Vue {
  private get subtotal(): number {
    return this.$store.getters.subtotal.toFixed(2);
  }
}
</script>

<style lang="sass">
  .cardt-subtotal-toolbar
    .v-toolbar__content
      padding-right: 0
    &__btn-checkout.v-btn
      font-size: 12px
      padding: 0 70px
      background: linear-gradient(to right, #f76d1c, #f6a613)
      border-radius: 0
    &__subtotal-label
      font-size: 12px
    &__subtotal-value
      font-size: 18px
</style>
