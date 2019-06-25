export class Product {
  public quantity: number = 0;

  constructor(
    public readonly id?: string,
    public readonly title?: string,
    public readonly picture?: string,
    public readonly price?: number,
  ) {}

  public get subtotal(): number {
    return (this.price || 0) * this.quantity;
  }
}
