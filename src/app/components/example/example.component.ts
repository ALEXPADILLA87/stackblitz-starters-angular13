import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  constructor() {}
  concatSet = new Set<number>();
  spreadSet = new Set<number>();
  displaySet: string = '';
  array = [1, 2, 5];
  array2 = [5, 6, 7];
  user: any;
  copiedUser: any;

  set() {
    this.concatSet = new Set(this.array.concat(this.array2));
    this.spreadSet = new Set([...this.array, ...this.array2]);
    this.displaySet = Array.from(this.spreadSet).join(',');
  }

  spread() {
    this.user = { name: 'John Doe', age: 10 };
    this.copiedUser = { ...this.user };
    this.copiedUser.name = 'Clark Kent';
  }
}
