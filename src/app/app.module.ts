import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from "@ionic-native/camera";
import { Http } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from "../pages/profile/profile";
import { ChangePasswordPage } from "../pages/profile/change-password/change-password";
import { ChangePhotoPage } from "../pages/profile/change-photo/change-photo"

import { AccountService } from './../providers/account.service';
import { CameraService } from './../providers/camera.service';
import { UserService } from './../providers/user.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ChangePasswordPage,
    ChangePhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ChangePasswordPage,
    ChangePhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Http,
    Camera,
    AccountService,
    CameraService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
