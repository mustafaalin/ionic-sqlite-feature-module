import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../database/database'
import { Platform } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
@Component({
  selector: 'app-ilac',
  templateUrl: './ilac.page.html',
  styleUrls: ['./ilac.page.scss'],
})
export class IlacPage implements OnInit {
  private ilacListesi;
  private db=new SQLite();
  constructor(private veritabani:DatabaseProvider,private platform:Platform) {
   
  }

  ngOnInit() {
    this.platform.ready().then(()=>{
      this.veritabani.ilacListele().then((res)=>{
        this.ilacListesi=res;
      });
    });
  }
  ilacSil(ilacId){
    this.veritabani.ilacSil(ilacId).then(()=>{console.log("ilac silindi.")});
  }
}