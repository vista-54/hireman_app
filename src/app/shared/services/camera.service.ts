import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {Crop} from '@ionic-native/crop';
import {Base64} from "@ionic-native/base64";

@Injectable()
export class CameraService {


    constructor(public platform: Platform, private camera: Camera, private crop: Crop, private base64: Base64) {
    }


    // Return a promise to catch errors while loading image
    getMedia(sourceType: number): Promise<any> {
        const options: any = {
            allowEdit: true,
            sourceType: sourceType,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            destinationType: this.camera.DestinationType.FILE_URI
        };
        // Get Image from ionic-native's built in camera plugin
        return this.camera.getPicture(options)
            .then((fileUri) => {
                // Crop Image, on android this returns something like, '/storage/emulated/0/Android/...'
                // Only giving an android example as ionic-native camera has built in cropping ability
                if (this.platform.is('ios')) {
                    return fileUri
                } else if (this.platform.is('android')) {
                    // Modify fileUri format, may not always be necessary

                    /* Using cordova-plugin-crop starts here */
                    return this.crop.crop(fileUri, {quality: 100, targetWidth: -1, targetHeight: -1});
                }
            })
            .then((path) => {
                // path looks like 'file:///storage/emulated/0/Android/data/com.foo.bar/cache/1477008080626-cropped.jpg?1477008106566'
                return this.base64.encodeFile(path)
            })
            .then((base64File: string) => {
                return base64File;
            }, (err) => {
                console.log(err);
            });
    }

}