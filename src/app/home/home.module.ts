import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
    MaterialModule
  ]
})
export class HomeModule {
}
