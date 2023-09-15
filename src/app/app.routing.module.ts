import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ExampleComponent } from './components/example/example.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductComponent },
      { path: 'cart', component: CartComponent },
      { path: 'example', component: ExampleComponent },
      { path: '**', redirectTo: 'products' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
