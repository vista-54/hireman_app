import {Injectable} from "@angular/core";
import {EntityService} from "./entity.service";
import {RequestService} from "./request.service";
import {ToastController} from "ionic-angular";

@Injectable()

export class UserSkillsService extends EntityService {


    constructor(public request: RequestService, public toast: ToastController) {
        super(request, toast);
        this.service_name = 'user-skill';
    }


}