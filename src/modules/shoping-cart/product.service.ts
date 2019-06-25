import { Product } from './product';
import { PRODUCTS_MOCK } from './products.mock';

class ProductService {
  private readonly productMock: Product[] = PRODUCTS_MOCK;

  public getRandomProductDifferentOf(differentOf: Product[]): Product | undefined {
    let productDifferent!: Product;
    this.productMock.forEach((product: Product) => {
      if (!differentOf.some((item: Product) => item.id === product.id)) {
        productDifferent = product;
      }
    });

    return productDifferent;
  }

  public getRandomProductList(quantity: number = 1, differentOf: Product[] = []): Product[] {
    const productList: Product[] = [];
    const mustBeDifferent: Product[] = differentOf;

    for (let index: number = 1; index <= quantity; index += 1) {
      const tempProduct: Product | undefined = this.getRandomProductDifferentOf(mustBeDifferent);

      if (tempProduct) {
        tempProduct.quantity = 0;
        productList.push(tempProduct);
        mustBeDifferent.push(tempProduct);
      }
    }

    return productList;
  }
}

export default new ProductService();
