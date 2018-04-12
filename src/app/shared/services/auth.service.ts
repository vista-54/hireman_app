import {Injectable} from "@angular/core";
import {RequestService} from "./request.service";
import {COMMON_URL} from "./common.url";
import {loginCredentials} from "../../login/login.component";
import {EntityService} from "./entity.service";
import {ToastController} from "ionic-angular";
import {Entity} from "./entity.interface";
import {Observable} from "rxjs/Observable";
import {HttpResponse} from "@angular/common/http";


@Injectable()
export class AuthService  {

    constructor(private request: RequestService, private toastCtrl: ToastController) {
    }

    login(credentials: loginCredentials):Observable<any> {
        return this.request.post(COMMON_URL.auth.login, credentials)
            .do(() => {
                },
                () => {
                    this.showNotification('error','Користувача за вказаним телефоном та паролем не знайдено')
                })
    }

    logout() {
        return this.request.get(COMMON_URL.auth.logout);
    }

    showNotification(type, message) {
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