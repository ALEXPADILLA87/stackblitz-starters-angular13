import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartModule } from '../cart/cart.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, CartModule],
  declarations: [ProductComponent],
})
export class ProductModule {}
