import {Injectable} from '@angular/core';
import {COMMON_URL} from './common.url';
import {RequestService} from './request.service';
import {Entity} from './entity.interface';
import {COMMON_MSG} from './common.messages';
import {ToastController} from "ionic-angular";

// declare const $: any;

@Injectable()
export class EntityService implements Entity {


    protected service_name: string;

    constructor(public request: RequestService, private toastCtrl: ToastController) {
    }

    /**
     *
     * @returns {Promise<TResult|ArrayBuffer>|Promise<ArrayBuffer>}
     */
    public get(id: number = null, data: Object = null) {
        if (id == null) {
            return this.request.get(COMMON_URL[this.service_name].index, data);
        } else {
            return this.request.get(COMMON_URL[this.service_name].index + '/' + id, data);
        }
    }

    /**
     *
     * @param data
     * @returns {Promise<TResult|ArrayBuffer>|Promise<ArrayBuffer>}
     */
    public create(data: any) {
        return this.request.post(COMMON_URL[this.service_name].create, data)
            .do(() => {
                    this.showNotification('success', COMMON_MSG[this.service_name].create);
                },
                err => {
                    this.incorrectValidationErrors(err.error.error);
                });
    }

    /**
     *
     * @param data
     * @param id
     * @returns {Promise<ArrayBuffer>|Promise<TResult|ArrayBuffer>}
     */
    public edit(data: any, id: number = null) {
        return this.request.put(COMMON_URL[this.service_name].create + '/' + id, data)
            .do(() => {
                    this.showNotification('success', COMMON_MSG[this.service_name].update);
                },
                err => {
                    console.log(err);
                });

    }

    /**
     *
     * @param id
     * @returns {any}
     */
    public destroy(id: number) {
        return this.request.destroy(COMMON_URL[this.service_name].index + '/' + id)
            .do(() => {
                this.showNotification('success', COMMON_MSG[this.service_name].delete);
            });
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

    public incorrectValidationErrors(errors: Array<String>) {
        let errorMsg = "";
        for (var i in errors) {
            const obj = errors[i];
            errorMsg += obj + " ";
        }
        this.showNotification('error', errorMsg);
    }

}
