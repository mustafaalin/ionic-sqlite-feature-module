import { Component } from '@angular/core';
import { DatabaseProvider } from '../database/database'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private veritabani:DatabaseProvider) {
  }

}
