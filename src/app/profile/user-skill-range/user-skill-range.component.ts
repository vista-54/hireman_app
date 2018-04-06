import {Component} from '@angular/core';
import {UserSkillsService} from "../../shared/services/user-skills.service";
import {ModalController, NavController, NavParams, ViewController} from "ionic-angular";
import {SkillListComponent} from "../skill-list-modal/skill-list.component";

declare interface Skill {
    name: string,
    level: number
}


@Component({
    selector: 'page-profile-user-skill-range',
    templateUrl: './user-skill-range.component.html'
})
export class UserSkillRangeComponent {
    public entity: Skill[];
    public level: number;

    constructor(private service: UserSkillsService, private navCtrl: NavController, public modalCtrl: ModalController,
                private viewCtrl: ViewController) {
        this.level = 1;
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

    goToAddSkill() {
        let profileModal = this.modalCtrl.create(SkillListComponent);
        profileModal.present();
    }

    dismiss() {
        const data = {
            level: this.level
        };
        this.viewCtrl.dismiss(data);
    }

}
