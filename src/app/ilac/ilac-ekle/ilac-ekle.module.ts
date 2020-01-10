import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient} from "@angular/common/http";
import { IonicModule } from '@ionic/angular';

import { IlacEklePage } from './ilac-ekle.page';

const routes: Routes = [
  {
    path: '',
    component: IlacEklePage
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IlacEklePage]
})
export class IlacEklePageModule {}