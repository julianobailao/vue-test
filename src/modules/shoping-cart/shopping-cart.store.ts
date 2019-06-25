import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators';
import { Product } from './product';

@Module
export default class ShoppingCart extends VuexModule {
  public products: Product[] = [];

  @Mutation
  public putProduct(product: Product) {
    if (!this.products.some((item: Product) => item.id === product.id)) {
      product.quantity = 1;
      this.products.push(product);
    }
  }

  @Mutation
  public removeProduct(product: Product) {
    const indexToRemove: number = this.products
      .findIndex((item: Product) => item.id === product.id);
    this.products.splice(indexToRemove, 1);
  }

  @Action({ commit: 'putProduct' })
  public addProductToCart(product: Product) {
    return product;
  }

  @Action({ commit: 'removeProduct' })
  public removeProductFromCart(product: Product) {
    return product;
  }

  get subtotal(): number {
    if (this.products.length) {
      return this.products
        .map((product: Product): number => product.subtotal)
        .reduce((sum: number, subtotal: number) => {
          return sum + subtotal;
        });
    }

    return 0;
  }
}
