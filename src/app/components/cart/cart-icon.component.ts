import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css'],
})
export class CartIconComponent implements OnInit {
  constructor(private cartService: ShoppingCartService) {}
  get total() {
    return +this.cartService.totalProducts();
  }
  ngOnInit() {}
}
