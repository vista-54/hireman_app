import {Injectable} from "@angular/core";
import {RequestService} from "./request.service";
import {COMMON_URL} from "./common.url";
import {loginCredentials} from "../../login/login.component";


@Injectable()
export class AuthService {

    constructor(private request: RequestService) {
    }

    login(credentials: loginCredentials) {
        return this.request.post(COMMON_URL.auth.login, credentials)
            .do(() => {
            })
    }

    logout() {
        return this.request.get(COMMON_URL.auth.logout);
    }
}