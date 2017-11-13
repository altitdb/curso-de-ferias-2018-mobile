// DEPENDENCES
import {BrowserModule} from '@angular/platform-browser'
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
import {UserService} from "./providers/user.service"
import {AccountService} from "./providers/account.service"
import {CameraService} from "./providers/camera.service"

// MODULES
@NgModule({
  declarations: [
    MyApp,
    HeaderComponent,
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
    HeaderComponent,
    HomePage,
    ProfilePage,
    ChangePasswordPage,
    ChangePhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    Camera,
    AccountService,
    CameraService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
