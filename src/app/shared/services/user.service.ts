import {Injectable} from "@angular/core";
import {EntityService} from "./entity.service";
import {RequestService} from "./request.service";
import {COMMON_URL} from "./common.url";

@Injectable()

export class UserService extends EntityService {

    /**
     *
     * @param request
     */
    constructor(public request: RequestService) {
        super(request);
        this.service_name = 'user';
    }

    public edit(data: Object) {
        return this.request.put(COMMON_URL.user.update, data);
    }

}