import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  shoppingCart!: ShoppingCart;
  constructor(private cartService: ShoppingCartService) {}
  get totalProducts() {
    return +this.cartService.totalProducts();
  }

  get totalPrice() {
    return +this.cartService.totalPrice();
  }
  ngOnInit() {
    this.shoppingCart = this.cartService.getShoppingCart();
  }

  delete(index: number) {
    console.log('index', index);
    this.cartService.deleteLineProduct(index);
  }
}
