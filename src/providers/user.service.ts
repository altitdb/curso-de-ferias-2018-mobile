import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { User } from './../app/model/user';
import { Subscriber } from "rxjs/Subscriber";

@Injectable()
export class UserService {

    getLogedUser(): Observable<User> {

        return new Observable<User>(
            (subscriber: Subscriber<User>) => subscriber.next(
                new User('Flavia',
                    'flavia',
                    'flavia.domingues@matera.com',
                    'ADMINISTRADOR',
                    './assets/images/avatar.png')));

    }
}