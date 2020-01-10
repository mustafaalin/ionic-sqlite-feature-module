import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../../database/database'
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { SOURCE } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-ilac-ekle',
  templateUrl: './ilac-ekle.page.html',
  styleUrls: ['./ilac-ekle.page.scss'],
})
export class IlacEklePage implements OnInit {

  private txtIlacAd:string="";
  private txtIlacAciklama:string="";
  private base64Image:string;

  constructor(private veritabani: DatabaseProvider, 
    private alert:AlertController, 
    private camera:Camera,
    ) { 
  
  }

  ngOnInit() {
  }

   ilacEkle() {
    this.veritabani.ilacEkle(this.txtIlacAd,this.txtIlacAciklama,this.base64Image);
    const alert = this.alert.create({
      header: 'Ecza Deposu',
      subHeader: 'Başarılı',
      message: 'İlaç kaydedildi.',
      buttons: ['Kapat']
    }).then((alert)=> {alert.present()});
  } 
  
  ilacResimCek(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight:300,
      targetWidth:300
    };
    this.camera.getPicture(options).then((imageData)=>{
      this.base64Image='data:image/jpeg;base64,'+imageData;
    });
  }
}