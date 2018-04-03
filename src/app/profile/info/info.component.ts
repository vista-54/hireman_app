import {Component, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../shared/services/user.service";

export declare interface User {
    name: string,
    surname: string,
    city: string,
    email: string,
    phone: string,
    passport: boolean
}

@Component({
    selector: 'page-profile-info',
    templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {
    @Input() editMode: boolean;
    entity: User = {
        name: '',
        surname: '',
        city: '',
        email: '',
        phone: '',
        passport: false
    };


    public defaultImg: string;

    constructor(private service: UserService) {
        this.defaultImg = 'assets/imgs/camera.png';

    }

    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo() {
        this.service.get()
            .subscribe(success => {
                this.entity = success['entity'];
            });
    }


}
