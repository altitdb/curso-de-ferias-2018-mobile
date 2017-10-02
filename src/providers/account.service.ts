import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {
    url = "";

    constructor() {
    }

    sendPicture(picture, user) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // return this.http.post(this.url, picture, { headers: headers });
    }

    changePassword(request) {

    }
}