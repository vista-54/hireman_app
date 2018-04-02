import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule} from 'ionic-angular';

import {HttpClientModule} from "@angular/common/http";
import {MainboardComponent} from "./mainboard.component";
import {JobListComponent} from "../job-list/job-list.component";
import {JobService} from "../shared/services/job.service";
// import {FriendListComponent} from "../friend-list/friend-list.component";
import {ProfileComponent} from "../profile/profile.component";
import {UserSkillsService} from "../shared/services/user-skills.service";
import {InfoComponent} from "../profile/info/info.component";
import {SkillComponent} from "../profile/skill/skill.component";
// import {InfoComponent} from "../info/info.component";
// import {FaIconComponent} from "../../components/fa-icon/fa-icon.component";


@NgModule({
    declarations: [
        MainboardComponent,
        JobListComponent,
        // FriendListComponent,
        ProfileComponent,
        InfoComponent,
        SkillComponent
        // InfoComponent,
        // FaIconComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MainboardComponent),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MainboardComponent,
        JobListComponent,
        // FriendListComponent,
        ProfileComponent,
        InfoComponent,
        SkillComponent
        // InfoComponent
    ],
    providers: [
        JobService,
        UserSkillsService
    ]
})
export class MainboardModule {
}