<template lang="pug">
  .page-title
    v-card.page-title(color="primary" dark flat)
      v-card-text
        v-layout(row align-center)
          v-btn.ma-0(small icon flat)
            v-icon(small) home
          v-icon(small) chevron_right
          v-btn.ma-0(small flat) Heroes
        h1.display-1 Teste
        .page-title__extension-zone
    v-container.page-title__content
      slot
</template>

<style lang="sass" scoped>
  .page-title
    &.v-card
      border-radius: 0
    &__extension-zone
      height: 50px
    &__content
      margin-top: -70px
</style>
