import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActionSheetController, ModalController} from "ionic-angular";
import {Camera, CameraOptions} from "@ionic-native/camera";

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
    @Output() onEntityChange = new EventEmitter<User>();


    public defaultImg: string;
    public imageURI: string;

    constructor(private service: UserService, private camera: Camera, private actionSheetCtrl: ActionSheetController) {
        this.defaultImg = 'assets/imgs/camera.png';
    }

    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo() {
        this.service.get()
            .subscribe(success => {
                this.entity = success['entity'];
                this.onEntityChange.emit(this.entity);
            });
    }

    /**
     * Emit data to @ProfileComponent
     */
    onFormChange() {
        this.onEntityChange.emit(this.entity);
    }

    openPhotoActions() {
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
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
            targetWidth: 80,
            targetHeight: 80
        };

        this.camera.getPicture(options).then((imageData) => {
            this.entity.file = 'data:image/jpeg;base64,' + imageData;


            // this.entity.file = imageData;
        }, (err) => {
            // Handle error
        });
    }


}
