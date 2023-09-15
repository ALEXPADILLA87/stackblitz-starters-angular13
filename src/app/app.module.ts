import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CartModule } from './components/cart/cart.module';
import { ExampleModule } from './components/example/example.module';
import { ProductModule } from './components/product/product.module';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ProductModule,
    CartModule,
    AppRoutingModule,
    ExampleModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
