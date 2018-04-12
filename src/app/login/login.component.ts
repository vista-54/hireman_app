import {Component} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {NavController} from 'ionic-angular';
import {RegistrationComponent} from "../registration/registration.component";
import {MainboardComponent} from "../mainboard/mainboard.component"; //what you use to navigate

export declare interface loginCredentials {
    phone: string,
    password: string
}

@Component({
    selector: 'page-login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    public isActive: boolean;
    public user: loginCredentials = {
        phone: '',
        password: ''
    };

    constructor(private auth: AuthService, private navCtrl: NavController) {
        this.isActive = true;
    }

    login() {
        this.auth.login(this.user).subscribe(
            success => {
                localStorage.token = success['data']['token'];
                localStorage.isLogged = true;
                this.navCtrl.push(MainboardComponent);
            },
            error => {
                console.log(error)
            }
        )
    }

    goToRegistration() {
        this.navCtrl.push(RegistrationComponent);
    }

    showPass() {
        this.isActive = !this.isActive;
    }
}