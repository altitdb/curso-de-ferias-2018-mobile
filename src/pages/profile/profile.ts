import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';

import { User } from './../../app/model/user';
import { UserService } from './../../providers/user.service';
import { ChangePasswordPage } from './change-password/change-password'
import { ChangePhotoPage } from './change-photo/change-photo'

@Component({
	templateUrl: "profile.html",
	styleUrls: ["/src/pages/profile/profile.scss"]
})
export class ProfilePage {

	public user: User;

	constructor(public navCtrl: NavController,
		private _userService: UserService) {

		_userService.getLogedUser().subscribe((data) => {
			this.user = data;
		});

	}

	changePhoto() {
		this.navCtrl.setRoot(ChangePhotoPage);
	}

	changePass() {
		this.navCtrl.setRoot(ChangePasswordPage);
	}

}