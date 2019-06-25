<template lang="pug">
  div
    p the son of fon
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from '@/services/router-loader/router-loader.decorator';
import HelloWorld from './hello-world.view.vue';

@Route({
  path: 'son',
  name: 'automatic-son',
  parent: HelloWorld,
})
@Component
export default class HeaderSidebarTemplate extends Vue {}
</script>
