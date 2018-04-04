import {Component} from "@angular/core";
import {User} from "./info/info.component";
import {UserService} from "../shared/services/user.service";


@Component({
    selector: 'page-profile',
    templateUrl: './profile.component.html',
})

export class ProfileComponent {
    public segment: string;
    public editMode: boolean;
    private entity: User;

    constructor(private service: UserService) {
        this.segment = 'info';
        this.editMode = false;
    }

    public editEnable() {
        this.editMode = !this.editMode;
    }

    onEntityChange(data: User) {
        this.entity = data;
    }

    save() {
        this.service.edit(this.entity)
            .subscribe(data => {
                    debugger
                    this.editEnable();
                },
                err => {
                    debugger
                    console.log(err);
                })
    }


}
