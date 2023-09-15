import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent } from './example.component';

@NgModule({
  imports: [CommonModule, MatTabsModule, BrowserAnimationsModule],
  declarations: [ExampleComponent],
})
export class ExampleModule {}
