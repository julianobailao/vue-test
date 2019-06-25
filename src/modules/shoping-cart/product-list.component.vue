<template lang="pug">
  .product-list
    v-layout(row align-center wrap)
      v-flex(xs12 sm6 v-for="product in products" :key="product.id")
        product-card(
          :product="product"
          @remove="remove"
          @add-to-cart="addToCart"
          )
    slot(v-if="!products.length" name="empty")
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Product } from './product';
import ProductCard from './product-card.component.vue';

@Component({
  components: {
    ProductCard,
  },
})
export default class ProductList extends Vue {
  @Prop({ type: Array, required: true })
  private products?: Product[];

  @Emit()
  private addToCart(product: Product) {
    return product;
  }

  @Emit()
  private remove(product: Product) {
    return product;
  }
}
</script>
