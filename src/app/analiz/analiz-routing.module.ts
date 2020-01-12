import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalizPage } from './analiz.page';

const routes: Routes = [
  {
    path: '',
    component: AnalizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalizPageRoutingModule {}
