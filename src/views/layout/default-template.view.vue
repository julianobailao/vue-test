<template lang="pug">
  .header-sidebar-template
    app-header
    v-content
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from '@/services/router-loader/router-loader.decorator';
import AppHeader from '@/components/layout/app-header.component.vue';

@Route({
  path: '/',
  name: 'header-sidebar-template',
})
@Component({
  components: {
    AppHeader,
  },
})
export default class DefaultTemplate extends Vue {}
</script>
