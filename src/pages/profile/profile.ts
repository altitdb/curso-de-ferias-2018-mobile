import { User } from './../../app/model/user';
import { Component } from "@angular/core";

import { UserService } from './../../providers/user.service';

@Component({
    templateUrl: "profile.html",
    styleUrls: ["/src/pages/profile/profile.scss"]
})
export class ProfilePage {

    public user: User;

    constructor(private _userService: UserService) {

        _userService.getLogedUser().subscribe((data) => {
            this.user = data;
        });

    }

}