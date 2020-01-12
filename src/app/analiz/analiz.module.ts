import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalizPageRoutingModule } from './analiz-routing.module';

import { AnalizPage } from './analiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalizPageRoutingModule
  ],
  declarations: [AnalizPage]
})
export class AnalizPageModule {}
