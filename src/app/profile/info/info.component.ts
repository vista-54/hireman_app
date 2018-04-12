import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActionSheetController, ModalController} from "ionic-angular";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {Crop} from "@ionic-native/crop";
import {CameraService} from "../../shared/services/camera.service";
import {DomSanitizer} from "@angular/platform-browser";

export declare interface User {
    name: string,
    surname: string,
    city: string,
    email: string,
    phone: string,
    passport: boolean,
    file: any
}

@Component({
    selector: 'page-profile-info',
    templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {
    @Input() editMode: boolean;
    public entity: User = {
        name: '',
        surname: '',
        city: '',
        email: '',
        phone: '',
        passport: false,
        file: ''
    };
    @Output() onUserChange = new EventEmitter<User>();


    public defaultImg: string;
    public imageURI: string;

    constructor(private service: UserService, private cameraService: CameraService, private camera: Camera, private actionSheetCtrl: ActionSheetController,
                private crop: Crop, private sanitizer: DomSanitizer) {
        this.defaultImg = 'assets/imgs/camera.png';
    }

    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo() {
        this.service.get()
            .subscribe(success => {
                this.entity = success['entity'];
                this.onUserChange.emit(this.entity);
            });
    }

    /**
     * Emit data to @ProfileComponent
     */
    onFormChange() {
        this.onUserChange.emit(this.entity);
    }

    openPhotoActions() {
        if (!this.editMode) {
            return false;
        }
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Оберіть',
            buttons: [
                {
                    text: 'Камера',
                    handler: () => {
                        this.photoAddControl(1);
                    }
                }, {
                    text: 'Галерея',
                    handler: () => {
                        this.photoAddControl(2);
                    }
                }, {
                    text: 'Відмінити',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    photoAddControl(sourceType: number) {
        this.cameraService.getMedia(sourceType).then(res => {
            this.entity.file = this.sanitizer.bypassSecurityTrustResourceUrl(res);
        })
    }


}
