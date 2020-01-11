import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../database/database'
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AlertController } from '@ionic/angular';
import { SOURCE } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-randevu',
  templateUrl: './randevu.page.html',
  styleUrls: ['./randevu.page.scss'],
})
export class RandevuPage implements OnInit {

  private txtRandevuDoktorTarih:string="";
  private txtRandevuDoktorSaat:string="";
  private txtDoktorAdi:string="";

  constructor(private veritabani: DatabaseProvider, private alert:AlertController,     ) { 
  
  }

  ngOnInit() {
  }
  doktorSec(){
    this.txtDoktorAdi="Doktor 1";

  }

   randevuAl() {
    this.veritabani.Randevu(this.txtRandevuDoktorTarih,this.txtRandevuDoktorSaat);
    const alert = this.alert.create({
      header: 'Randevular',
      subHeader: 'Başarılı',
      message: 'Randevu kaydedildi.',
      buttons: ['Kapat']
    }).then((alert)=> {alert.present()});
   }
  
  
}
