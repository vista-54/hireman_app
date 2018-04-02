import {Component} from '@angular/core';
import {UserSkillsService} from "../../shared/services/user-skills.service";

declare interface Skill {
    name: string,
    level: number
}


@Component({
    selector: 'page-profile-skill',
    templateUrl: './skill.component.html'
})
export class SkillComponent {
    public entity: Skill = {
        name: '',
        level: 0
    };

    constructor(private service: UserSkillsService) {

    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.service.get()
            .subscribe(success => {
                this.entity = success['entity'];
            });
    }

}
