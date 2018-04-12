import {Component, Input} from '@angular/core';
import {ModalController, ViewController} from "ionic-angular";
import {SkillListService} from "../../shared/services/skill-list.service";
import {UserSkillRangeComponent} from "../user-skill-range/user-skill-range.component";
import {UserSkillsService} from "../../shared/services/user-skills.service";

declare interface UserSkill {
    skill_id: number,
    level: number
}

@Component({
    selector: 'page-profile-skill-list',
    templateUrl: './skill-list.component.html'
})

export class SkillListComponent {
    public entity: any[];
    public skills: Array<UserSkill>;


    constructor(private service: SkillListService, private viewCtrl: ViewController, private modal: ModalController,
                private userSkillService: UserSkillsService) {
        this.skills = [];
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

    dismiss() {
        this.viewCtrl.dismiss();
    }


    save() {
        this.userSkillService.create(this.skills)
            .subscribe(data => {
                console.log(data);
                this.dismiss();
            })
    }

    onChangeCheckBox(id: number, event) {
        if (event.checked) {
            let profileModal = this.modal.create(UserSkillRangeComponent, {skill_id: id});
            profileModal.onDidDismiss(data => {
                const skillObject = {
                    skill_id: id,
                    level: data.level
                };
                this.skills.push(skillObject);
                console.log(this.skills);
            });
            profileModal.present();
        } else {
            this.skills = this.skills.filter(function (element) {
                return element.skill_id !== id;
            });
        }
    }

}
