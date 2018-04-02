import {Component} from "@angular/core";
import {UserService} from "../shared/services/user.service";
import {UserSkillsService} from "../shared/services/user-skills.service";


@Component({
    selector: 'page-profile',
    templateUrl: './profile.component.html',
})

export class ProfileComponent {
    public segment: string;



    constructor(private service: UserService, private userSkillService: UserSkillsService) {
        this.segment = 'info';
    }


}
