import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'contact', loadChildren: '../contact/contact.module#ContactModule'},
  {path: '', loadChildren: '../home/home.module#HomeModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
