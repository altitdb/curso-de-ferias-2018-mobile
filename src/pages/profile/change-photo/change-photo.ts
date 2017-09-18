import { Component } from "@angular/core";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController, ToastController } from "ionic-angular";

import { User } from './../../../app/model/user';
import { UserService } from './../../../providers/user.service';
import { AccountService } from './../../../providers/account.service';
import { CameraService } from './../../../providers/camera.service';
import { ProfilePage } from './../profile';

@Component({
	templateUrl: "change-photo.html",
	styleUrls: ["/src/pages/profile/change-photo/change-photo.scss"]
})
export class ChangePhotoPage {

	base64Image: string;
	public user: User;

	constructor(public navCtrl: NavController,
		private toastCtrl: ToastController,
		private _userService: UserService,
		private _accountService: AccountService,
		private _cameraService: CameraService) {

		_userService.getLogedUser().subscribe((data) => {
			this.user = data;
		});

		this.base64Image = null;
	}

	takePicture(): void {
		this._cameraService.takePicture({}).then(data => this.base64Image = data,
			error => {
				let toast = this.toastCtrl.create({ message: error, duration: 3000 });
				toast.present();
			});
	}

	confirm() {
		this._accountService.sendPicture({ 'picture': [{ 'content': this.base64Image }] }, this._userService.getLogedUser()).subscribe(
			result => {
				this.navCtrl.setRoot(ProfilePage);
			},
			error => {
				let toast = this.toastCtrl.create({
					message: "Houve um erro ao enviar a foto do perfil. Por favor tente novamente.",
					duration: 3000
				});
				toast.present();
			}
		);
	}

	cancel() {
		this.takePicture();
	}

	//cancelar para voltar para o página do perfil
	cancelAction() {
		this.navCtrl.setRoot(ProfilePage);
	}


}