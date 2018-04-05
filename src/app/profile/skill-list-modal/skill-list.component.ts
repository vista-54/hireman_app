import {Component} from '@angular/core';
import {ModalController, ViewController} from "ionic-angular";
import {SkillListService} from "../../shared/services/skill-list.service";
import {UserSkillRangeComponent} from "../user-skill-range/user-skill-range.component";


@Component({
    selector: 'page-profile-skill-list',
    templateUrl: './skill-list.component.html'
})

export class SkillListComponent {
    public entity: any[];
    public skills: Array<number>;

    constructor(private service: SkillListService, private viewCtrl: ViewController, private modal: ModalController) {
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

    }

    onChangeCheckBox(id: number) {
        let profileModal = this.modal.create(UserSkillRangeComponent);
        profileModal.present();
        // const elementPositionInArray = this.skills.indexOf(id);
        // if (elementPositionInArray === -1) {
        //     this.skills.push(id);
        // } else {
        //     this.skills.splice(elementPositionInArray, 1);
        // }
    }

}
