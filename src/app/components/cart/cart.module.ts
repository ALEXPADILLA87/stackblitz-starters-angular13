import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app.routing.module';
import { CartIconComponent } from './cart-icon.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [CartIconComponent, CartComponent],
  exports: [CartIconComponent],
})
export class CartModule {}
