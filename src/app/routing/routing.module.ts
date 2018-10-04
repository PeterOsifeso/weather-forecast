import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home/home.component';

const routes: Routes = [
  {path: '', loadChildren: '../home/home.module#HomeModule'},
  {path: 'contact', loadChildren: '../contact/contact.module#ContactModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
