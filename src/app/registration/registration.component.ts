import {Component} from "@angular/core";
import {LoginComponent, loginCredentials} from "../login/login.component";
import {NavController, ToastController} from "ionic-angular";
import {UserService} from "../shared/services/user.service";
import {MainboardComponent} from "../mainboard/mainboard.component";

@Component({
    selector: 'page-registration',
    templateUrl: './registration.component.html'
})

export class RegistrationComponent {
    public isActive: boolean;
    public user: loginCredentials = {
        phone: '',
        password: ''
    };

    constructor(private navCtrl: NavController, private service: UserService, private toastCtrl: ToastController) {
        this.isActive = true;
    }

    goToLogin() {
        this.navCtrl.push(LoginComponent);
    }

    registration() {
        this.service.create(this.user)
            .subscribe(data => {
                this.navCtrl.push(LoginComponent);
            });
    }

    showPass() {
        this.isActive = !this.isActive;
    }

}