import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExampleComponent } from './components/example/example.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'user', component: UserListComponent },
      { path: 'example', component: ExampleComponent },
      { path: '**', redirectTo: 'user' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
