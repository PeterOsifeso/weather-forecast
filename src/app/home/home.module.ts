import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import {CoreModule} from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule,
        SharedModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
