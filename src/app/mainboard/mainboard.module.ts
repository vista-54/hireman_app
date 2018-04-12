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
import {SkillComponent} from "../profile/user-skills/skill.component";
import {FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {Camera} from '@ionic-native/camera';
import {CameraService} from "../shared/services/camera.service";
import {Crop} from "@ionic-native/crop";
import {Base64} from "@ionic-native/base64";
import {SkillListComponent} from "../profile/skill-list-modal/skill-list.component";
import {SkillListService} from "../shared/services/skill-list.service";
import {UserSkillRangeComponent} from "../profile/user-skill-range/user-skill-range.component";
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
    declarations: [
        MainboardComponent,
        JobListComponent,
        // FriendListComponent,
        ProfileComponent,
        InfoComponent,
        SkillComponent,
        SkillListComponent,
        UserSkillRangeComponent
        // InfoComponent,
        // FaIconComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MainboardComponent),
        LoadingBarHttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MainboardComponent,
        JobListComponent,
        // FriendListComponent,
        ProfileComponent,
        InfoComponent,
        SkillComponent,
        SkillListComponent,
        UserSkillRangeComponent,
        // InfoComponent
    ],
    providers: [
        JobService,
        UserSkillsService,
        FileTransferObject,
        File,
        Camera,
        CameraService,
        Crop,
        Base64,
        SkillListService
    ]
})
export class MainboardModule {
}
