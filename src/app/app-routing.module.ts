import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'ilac', 
    loadChildren: './ilac/ilac.module#IlacPageModule' 
  },
  { 
    path: 'randevu', 
    loadChildren: './randevu/randevu.module#RandevuPageModule' 
  },
  { 
    path: 'ilac-ekle', 
    loadChildren: './ilac/ilac-ekle/ilac-ekle.module#IlacEklePageModule' 
  },
  { path: 'analiz', loadChildren: './analiz/analiz.module#AnalizPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
