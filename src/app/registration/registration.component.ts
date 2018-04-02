import {Component} from "@angular/core";
import {LoginComponent, loginCredentials} from "../login/login.component";
import {NavController} from "ionic-angular";
import {UserService} from "../shared/services/user.service";

@Component({
    selector: 'page-registration',
    templateUrl: './registration.component.html'
})

export class RegistrationComponent {
    public user: loginCredentials = {
        phone: '',
        password: ''
    };

    constructor(private navCtrl: NavController, private service: UserService) {

    }

    goToLogin() {
        this.navCtrl.push(LoginComponent);
    }

    registration() {
        this.service.create(this.user)
            .subscribe(data => {
                console.log(data);
            });
    }
}