<template lang="pug">
  v-toolbar.app-header(
    app
    flat
    color="white"
    height="70"
    )
    img.app-header__logo(
      src="/img/logo_usa.png"
      alt="Software Keep"
      )
    v-spacer
    v-toolbar-items.app-header__menu-items
      v-btn(flat) Microsoft Office
      v-btn(flat) Office Apps
      v-btn(flat) Windows
      v-btn(flat) Antivirus
      v-btn(flat) Office 365
      v-btn(flat) Blog
    v-spacer
    v-btn.app-header__btn-shopping-cart(icon)
      v-badge(
        left
        overlap
        )
        span(slot="badge")
        v-icon shopping_cart
    v-btn.app-header__btn-account(icon)
      v-badge(
        overlap
        color="transparent grey--text"
        )
        v-icon(slot="badge" size="22") arrow_drop_down
        v-icon person_pin
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import locales, { LocaleInfo } from '@/locales/locales.collection';

@Component
export default class AppHeader extends Vue {
  private locales: LocaleInfo[] = locales;

  private get darkIcon(): string {
    return this.$store.state.Layout.isDark
      ? 'brightness_7' : 'brightness_3';
  }

  private toggleIsDark() {
    this.$store.dispatch('toggleIsDark');
  }
}
</script>

<style lang="sass">
.app-header
  border-bottom: solid 1px rgba(#000, .15) !important
  &__logo
    height: 20px
  &__btn-shopping-cart.v-btn
    color: #042338
    .v-badge
      &__badge
        width: 8px
        height: 8px
        left: initial
        right: 0
        top: 0
        background: linear-gradient(to right, #1d8fd8, #169def)
  &__btn-account.v-btn
    color: #042338
    .v-badge
      &__badge
        right: 0
        bottom: initial
        top: 50%
        transform: translate(80%, -50%)
  &__menu-items
    .v-btn
      color: #042338
      font-size: 12px
      font-weight: normal
      text-transform: none
</style>
