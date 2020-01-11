import {Component, OnInit} from '@angular/core';
//import {AuthService} from '../services/authService/auth.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string;
    password: string;
    isLoading = false;

    //constructor(private alertController: AlertController, private navCtrl: NavController, private authService: AuthService) {
    //}

    ngOnInit() {
    }


    loginClick() {
        this.isLoading = true;
       

    }

}