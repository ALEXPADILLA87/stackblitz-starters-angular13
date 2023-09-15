import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public products!: Product[];
  public filterProducts!: Product[];
  searchText = '';
  constructor(
    private service: ProductService,
    private cartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.service.getItems().subscribe((result) => {
      this.products = result;
      this.filterProducts = result;
    });
  }

  search() {
    this.filterProducts = this.products.filter(
      (x) =>
        +x.title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
    );
  }

  add(product: Product) {
    this.cartService.addProduct(product);
  }
}
