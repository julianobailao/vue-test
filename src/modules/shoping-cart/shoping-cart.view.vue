<template lang="pug">
  .shoping-cart
    .white
      v-container.py-0
        cart-subtotal-toolbar
    v-divider
    v-container(grid-list-lg)
      h1.shoping-cart__title.mb-3 Hey Ronnie, this is your Shopping Cart
      products-list(
        :products="productsOnShoppingCart"
        @remove="removeProductFromShoppingCart"
        )
        v-alert(slot="empty" :value="true" color="white grey--text text--darken-3") Your cart is empty
      h1.shoping-cart__title.my-3 Get fully protected with these suggestions
      products-list(
        :products="suggestedProduct"
        @remove="removeProductFromSuggestionList"
        @add-to-cart="addToCart"
        )
        v-alert(slot="empty" :value="true" color="white grey--text text--darken-3") No more suggestion for you
    v-divider
    v-container.py-0
      cart-subtotal-toolbar
    v-divider.mb-5
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from '@/services/router-loader/router-loader.decorator';
import DefaultTemplate from '@/views/layout/default-template.view.vue';
import CartSubtotalToolbar from './cart-subtotal-toolbar.component.vue';
import ProductsList from './product-list.component.vue';
import { Product } from './product';
import productService from './product.service';

@Route({
  path: '/',
  name: 'shoping-cart',
  parent: DefaultTemplate,
})
@Component({
  components: {
    CartSubtotalToolbar,
    ProductsList,
  },
})
export default class ShopingCart extends Vue {
  private suggestedProduct: Product[] = [];
  private recusedSuggestedProducts: Product[] = [];

  private addToCart(product: Product) {
    this.$store.dispatch('addProductToCart', product).then(() => {
      this.removeProductFromSuggestionList(product);
    });
  }

  private removeProductFromSuggestionList(product: Product) {
    const indexToRemove = this.suggestedProduct
      .findIndex((item: Product) => item.id === product.id);
    this.suggestedProduct.splice(indexToRemove, 1);
    const differentOf: Product[] = [
      ...this.suggestedProduct.slice(0),
      ...this.productsOnShoppingCart.slice(0),
    ];
    const newProduct: Product | undefined = productService.getRandomProductDifferentOf(differentOf);

    if (newProduct) {
      newProduct.quantity = 0;
      this.suggestedProduct.push(newProduct);
      this.recusedSuggestedProducts.push(newProduct);
    }
  }

  private get productsOnShoppingCart(): Product[] {
    return this.$store.state.ShoppingCart.products;
  }

  private removeProductFromShoppingCart(product: Product) {
    product.quantity = 0;
    this.$store.dispatch('removeProductFromCart', product).then(() => {
      this.resetSuggestions();
    });
  }

  private resetSuggestions() {
    this.suggestedProduct = productService
      .getRandomProductList(2, this.productsOnShoppingCart.slice(0));
    this.recusedSuggestedProducts = this.suggestedProduct.slice(0);
  }

  private created() {
    this.resetSuggestions();
  }
}
</script>

<style lang="sass">
  .shoping-cart
    &__title
      color: #042338
      font-weight: normal
</style>
