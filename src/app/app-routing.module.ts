import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
