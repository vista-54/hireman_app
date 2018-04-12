import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserSkillsService} from "../../shared/services/user-skills.service";
import {ModalController} from "ionic-angular";
import {SkillListComponent} from "../skill-list-modal/skill-list.component";

export declare interface Skill {
    name: string,
    level: number
}


@Component({
    selector: 'page-profile-skill',
    templateUrl: './skill.component.html'
})
export class SkillComponent {
    public entity: Skill[];
    @Input() editMode: boolean;
    @Output() onSkillChange = new EventEmitter<Skill[]>();

    constructor(private service: UserSkillsService, public modalCtrl: ModalController) {

    }


    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.service.get()
            .subscribe(success => {
                this.entity = success['entity'];
                this.onSkillChange.emit(this.entity);
            });
    }

    goToAddSkill() {
        let profileModal = this.modalCtrl.create(SkillListComponent);
        profileModal.onDidDismiss(data => {
            this.getAll();
        });
        profileModal.present();
    }

    onFormChange() {
        this.onSkillChange.emit(this.entity);
    }

}
