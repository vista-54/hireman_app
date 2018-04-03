import {Component, Input, Output} from "@angular/core";
import {UserService} from "../shared/services/user.service";
import {UserSkillsService} from "../shared/services/user-skills.service";
import {User} from "./info/info.component";


@Component({
    selector: 'page-profile',
    templateUrl: './profile.component.html',
})

export class ProfileComponent {
    public segment: string;
    public editMode: boolean;

    constructor() {
        this.segment = 'info';
        this.editMode = false;
    }

    public editEnable() {
        this.editMode = !this.editMode;
    }

    save() {
    }


}
