import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { User } from './../../../app/model/user';
import { UserService } from './../../../providers/user.service';

@Component({
	templateUrl: "change-password.html",
	styleUrls: ["/src/pages/profile/change-password/change-password.scss"]
})
export class ChangePasswordPage implements OnInit {

	public changePasswordForm: FormGroup;
	public user: User;

	constructor(private _userService: UserService) {

		_userService.getLogedUser().subscribe((data) => {
			this.user = data;
		});

	}

	ngOnInit() {
		this.changePasswordForm = new FormGroup({
			currentPass: new FormControl(null, Validators.required),
			newPass: new FormControl(null, Validators.required),
			confirmNewPass: new FormControl(null, Validators.required)
		});
	}

}