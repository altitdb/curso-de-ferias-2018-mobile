// DEPENDENCES
import {BrowserModule} from '@angular/platform-browser'
import {HttpModule} from "@angular/http"
import {ErrorHandler, NgModule} from '@angular/core'
import {StatusBar} from '@ionic-native/status-bar'
import {SplashScreen} from '@ionic-native/splash-screen'
import {Camera} from '@ionic-native/camera'
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular'

// COMPONENTS
import {MyApp} from './app.component'
import {HeaderComponent} from "./components/shared/header/header.component"

// PAGES
import {HomePage} from './pages/home/home'
import {ProfilePage} from './pages/profile/profile.component'
import {ChangePasswordPage} from "./pages/profile/change-password/change-password"
import {ChangePhotoPage} from "./pages/profile/change-photo/change-photo"

// SERVICES
import {ApiService} from "./providers/api.service"
import {UserService} from "./providers/user.service"
import {AccountService} from "./providers/account.service"
import {CameraService} from "./providers/camera.service"

// MODULES
@NgModule({
  declarations: [
    ChangePasswordPage,
    ChangePhotoPage,
    HeaderComponent,
    HomePage,
    MyApp,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChangePasswordPage,
    ChangePhotoPage,
    HeaderComponent,
    HomePage,
    MyApp,
    ProfilePage
  ],
  providers: [
    ApiService,
    AccountService,
    Camera,
    CameraService,
    SplashScreen,
    StatusBar,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
