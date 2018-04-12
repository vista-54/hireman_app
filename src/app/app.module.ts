import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {AuthService} from "./shared/services/auth.service";
import {RequestService} from "./shared/services/request.service";
import {EntityService} from "./shared/services/entity.service";
import {UserService} from "./shared/services/user.service";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainboardModule} from "./mainboard/mainboard.module";
import {AuthenticationInterceptor} from "./shared/services/authentication.interceptor";
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginComponent,
        RegistrationComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        MainboardModule,
        LoadingBarHttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginComponent,
        RegistrationComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthService,
        RequestService,
        EntityService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthenticationInterceptor,
            multi: true,
        }
    ]
})
export class AppModule {
}
