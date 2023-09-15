import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { Product } from '../../../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products!: Product[];
  constructor(private http: HttpClient) {}

  public getItems() {
    if (!!this.products) {
      // boolean
      return of(this.products);
    }
    return this.http
      .get('https://646faaf909ff19b120879fc2.mockapi.io/api/vi/Products')
      .pipe(
        tap((result) => {
          this.products = result as Product[];
        }),
        map((result) => {
          return result as Product[];
        })
      );
  }
}
