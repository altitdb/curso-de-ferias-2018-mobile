import {Component} from '@angular/core'
import {NavController} from 'ionic-angular'
import {User} from '../../models/User'
import {UserService} from '../../providers/user.service'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.component.html'
})
export class ProfilePage {

  public user: User;

  constructor(public navCtrl: NavController,
              private _userService: UserService) {

    _userService.getLogedUser().subscribe((data) => {
      this.user = data;
    });

  }

}