import {Injectable} from "@angular/core";
import {EntityService} from "./entity.service";
import {RequestService} from "./request.service";
import {COMMON_URL} from "./common.url";
import {ToastController} from "ionic-angular";
import {COMMON_MSG} from "./common.messages";

@Injectable()

export class UserService extends EntityService {


    constructor(public request: RequestService, public toast: ToastController) {
        super(request, toast);
        this.service_name = 'user';
    }

    public edit(data: Object) {
        data['passport'] = data['passport'] ? 1 : 0;
        return this.request.put(COMMON_URL.user.update, data)
            .do(data => {
                    if (data.status) {
                        this.showNotification('success', COMMON_MSG[this.service_name].update);
                    }
                    else {
                        this.incorrectValidationErrors(data.error);
                    }
                },
                err => {
                    console.log(err);
                });
    }

}