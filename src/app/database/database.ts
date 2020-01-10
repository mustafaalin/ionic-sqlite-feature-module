import {Injectable} from "@angular/core";
import {SQLiteObject} from "@ionic-native/sqlite/ngx";
import {Platform} from "@ionic/angular";
//import {Ilac} from "../entities/ilac"
import { BehaviorSubject } from 'rxjs';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Storage } from '@ionic/storage';

@Injectable({providedIn: 'root'})
export class DatabaseProvider{
    private veritabani:SQLiteObject;
    constructor(private sqlite: SQLite,private platform:Platform) { 
        
        platform.ready().then(()=>{

            this.sqlite.create({
                name: 'data.db',
                location: 'default'
                }).then((db: SQLiteObject) => {
                  this.veritabani = db;
                  this.veritabani.executeSql('CREATE TABLE IF NOT EXISTS ilaclar(Id INTEGER PRIMERY KEY AUTOINCREMET, Ad TEXT, Aciklama TEXT, Resim TEXT)', [])
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e))
                    }).catch(e => console.log(e));

        });
    }

    ilacEkle(ilacAd,ilacAciklama,ilacResim){
        let data=[ilacAd,ilacAciklama,ilacResim];
        return this.veritabani.executeSql('INSERT INTO ilaclar (Ad,Aciklama,Resim) VALUES (?,?,?);',data).then(x=>console.log('ilac eklendi.'));
    }
    ilacListele(){
        return new Promise((resolve, reject)=>{
            this.veritabani.executeSql('SELECT * FROM ilaclar',[]).then((res)=>{
                let data=[];
                for(var i = 0;i<res.rows.length;i++){
                    data.push({
                        ilacAd:res.rows.item(i).Ad,
                        ilacAciklama:res.rows.item(i).Aciklama,
                        ilacResim:res.rows.item(i).Resim,
                        ilacId:res.rows.item(i).Id
                    });
                }
                resolve(data);
            });
        });
    }
    ilacSil(ilacId){
        return this.veritabani.executeSql('DELETE FROM ilaclar WHERE Id = ?',ilacId);
    }
}
