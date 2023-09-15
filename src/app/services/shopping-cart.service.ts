import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { LineProduct } from '../models/product-item';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart!: ShoppingCart;
  constructor() {
    this.createShoppingCart();
  }

  get lineProducts() {
    return this.shoppingCart?.lineProducts as LineProduct[];
  }
  public createShoppingCart() {
    this.shoppingCart = {
      lineProducts: new Array<LineProduct>(),
    };
  }

  public getShoppingCart() {
    return this.shoppingCart;
  }

  public addProduct(product: Product) {
    const currentProduct = this.lineProducts.find(
      (x) => x.product.id === product.id
    ) as LineProduct;

    if (Boolean(currentProduct)) {
      currentProduct.quantity = currentProduct.quantity + 1;
    } else {
      const lineProduct: LineProduct = {
        quantity: 1,
        product,
      };
      this.lineProducts.push(lineProduct);
    }
  }

  public deleteLineProduct(index: number) {
    this.lineProducts.splice(index, 1);
  }

  public totalProducts() {
    const total = this.shoppingCart.lineProducts.reduce(
      (accumulator, product) => accumulator + (product.quantity || 0),
      0
    );
    return total ?? 0;
  }

  public totalPrice() {
    const total = this.shoppingCart.lineProducts.reduce(
      (accumulator, product) =>
        accumulator + (product.quantity * product.product.price || 0),
      0
    );
    return total ?? 0;
  }
}
