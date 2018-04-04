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
    public user: loginCredentials = {
        phone: '',
        password: ''
    };

    constructor(private navCtrl: NavController, private service: UserService, private toastCtrl: ToastController) {

    }

    goToLogin() {
        this.navCtrl.push(LoginComponent);
    }

    registration() {
        this.service.create(this.user)
            .subscribe(data => {
                this.showMessage("Реєстрація пройшла успішно. Увійдіть з вашими даними");
                this.navCtrl.push(LoginComponent);
            });
    }

    showMessage(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }
}