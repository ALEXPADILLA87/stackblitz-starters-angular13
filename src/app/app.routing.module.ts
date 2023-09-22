import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ExampleComponent } from './components/example/example.component';
import { UserComponent } from './components/user/user.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductComponent },
      { path: 'user', component: UserComponent },
      { path: 'cart', component: CartComponent },
      { path: 'example', component: ExampleComponent },
      { path: '**', redirectTo: 'user' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
