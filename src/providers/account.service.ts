import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";


@Injectable()
export class AccountService {
    url = "";

    constructor(public http: Http) {
    }

    sendPicture(picture, user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.url, picture, { headers: headers });
    }
}