import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserService} from "../../shared/services/user.service";

declare interface User {
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
    public entity: User = {
        name: '',
        surname: '',
        city: '',
        email: '',
        phone: '',
        passport: false
    };
    public editMode: boolean;
    public defaultImg: string;

    constructor(private service: UserService) {
        this.editMode = false;
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
