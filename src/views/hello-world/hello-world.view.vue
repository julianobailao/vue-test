<template lang="pug">
  div
    p fon
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from '@/services/router-loader/router-loader.decorator';
import DefaultTemplate from '../layout/default-template.view.vue';

@Route({
  path: '/automatic',
  name: 'automatic',
  parent: DefaultTemplate,
})
@Component
export default class HelloWorld extends Vue {}
</script>
