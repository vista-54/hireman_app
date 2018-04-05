import {Component} from '@angular/core';
import {UserSkillsService} from "../../shared/services/user-skills.service";
import {ViewController} from "ionic-angular";


@Component({
    selector: 'page-profile-skill-list',
    templateUrl: './skill-list.component.html'
})

export class SkillListComponent {
    public entity: any[];

    constructor(private service: UserSkillsService, private viewCtrl: ViewController) {

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

}
