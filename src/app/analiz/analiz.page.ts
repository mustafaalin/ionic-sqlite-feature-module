import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { SQLService } from "../services/sql/sql.service";
@Component({
  selector: 'app-analiz',
  templateUrl: './analiz.page.html',
  styleUrls: ['./analiz.page.scss'],
})
export class AnalizPage {

  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  constructor(private sqlService: SQLService) { }
  IlacIsımleri = [];
  IlacSayilari = [];
  
 getIlaclar() {
    var count=0;
     this.sqlService.db.executeSql('SELECT * FROM ilaclar').then((rs: any) => {
       for (var i = 0; i < rs.rows.length; i++){       
          this.IlacIsımleri.push(rs.rows.item(i).adi);
          this.IlacSayilari.push(rs.rows.item(i).ilacSayisi);
           count++
       }
     });
  }
  ionViewDidEnter() {
   this.createBarChart();
   //this.getIlaclar();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        //labels: IlacIsımleri - Sqllite tarayıcıda data gelmediği için kapatıldı, telefonda çalışıyor.
        labels: ['Parol', 'Majazig', 'Asperaval', 'Ziretimin', 'Asprin', 'Antibiyotik', 'C vitamini'],
        datasets: [{
          label: 'İlaç sayısı ',
          //data: IlacSayilari
          data: [20,15 , 8, 44, 7.5, 9, 6],
          backgroundColor: 'rgb(109, 0, 133)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}