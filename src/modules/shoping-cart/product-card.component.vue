<template lang="pug">
  v-card.product-card(flat)
    v-btn.product-card__btn-remove(
      flat
      icon
      small
      color="grey"
      @click="remove"
      )
      v-icon(small) close
    v-card-text
      v-layout.ma-0(row align-center)
        .product-card__picture
          v-img(:src="product.picture")
        .product-card__info.ml-3
          .product-card__title {{ product.title }}
          v-layout.ma-0(row align-center wrap)
            v-select.product-card__quantity(
              flat
              solo
              outline
              reverse
              hide-details
              :items="quantities"
              v-model="product.quantity"
              v-if="product.quantity > 0"
              )
            v-spacer(v-if="product.quantity > 0")
            v-layout.product-card__price.ma-0(row align-start)
              .currency $
              .amount {{ amount }}
              .cents {{ cents }}
            v-spacer(v-if="product.quantity === 0")
            v-btn.product-card__btn-buy(
              dark
              flat
              @click="addToCart"
              v-if="product.quantity === 0"
              ) Add to cart
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Product } from './product';

@Component
export default class ProductCard extends Vue {
  @Prop({ type: Product, required: true })
  private product!: Product;

  private quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  private get amount(): number {
    if (this.product.price) {
      return parseInt(String(this.product.price), 10);
    }

    return 0;
  }

  private get cents(): number {
    if (this.product.price) {
      const cents: string | undefined = String(this.product.price).split('.').pop();
      return cents ? parseInt(cents, 10) : 0;
    }

    return 0;
  }

  @Emit()
  public remove(): Product {
    return this.product;
  }

  @Emit()
  public addToCart(): Product {
    return this.product;
  }
}
</script>

<style lang="sass">
  .product-card
    position: relative
    &__btn-remove.v-btn
      position: absolute
      right: 0
      top: 0
    &__picture
      width: 160px
      height: 160px
      overflow: hidden
    &__price
      .currency
        margin-top: 11px
      .amount
        font-size: 32px
        margin:0 4px
      .cents
        margin-top: 9px
    &__btn-buy.v-btn
      height: 40px
      font-size: 12px
      border-radius: 0
      background: linear-gradient(to right, #1282cb, #04a1fc)
    &__quantity
      max-width: 70px
      &.v-text-field.v-text-field--solo
        .v-input__control,
        .v-input__slot
          min-height: 30px
        .v-input__slot
          border-width: 1px !important
          border-color: #ccc !important
        .v-icon
          color: var(--v-primary-base)
</style>
