import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  shoppingForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.setupForm();
  }

  setupForm() {
    this.shoppingForm = this.fb.group({
      lineProducts: this.fb.array([]),
    });
  }

  get lineProducts() {
    return this.shoppingForm.controls['lineProducts'] as FormArray;
  }

  addLineProduct() {
    const lineProduct = this.fb.group({
      quantity: [null, Validators.required],
      Product: [null, Validators.required],
    });
    this.lineProducts.push(lineProduct);
  }

  deleteLineProduct(index: number) {
    (this.shoppingForm.controls['lineProducts'] as FormArray).removeAt(index);
  }
}
