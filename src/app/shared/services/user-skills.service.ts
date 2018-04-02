import {Injectable} from "@angular/core";
import {EntityService} from "./entity.service";
import {RequestService} from "./request.service";

@Injectable()

export class UserSkillsService extends EntityService {

    /**
     *
     * @param request
     */
    constructor(public request: RequestService) {
        super(request);
        this.service_name = 'user-skill';
    }


}