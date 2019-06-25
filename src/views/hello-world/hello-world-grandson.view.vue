<template lang="pug">
  p the grandson of fon
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from '@/services/router-loader/router-loader.decorator';
import HelloWorldSon from './hello-world-son.view.vue';

@Route({
  path: 'grandson',
  name: 'automatic-grandson',
  parent: HelloWorldSon,
})
@Component
export default class HeaderSidebarTemplate extends Vue {}
</script>
