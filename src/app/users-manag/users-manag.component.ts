import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../services-api/user.service';
import {AlertService} from '../services-api/alert.service';
import {isUndefined} from 'util';
import {Role} from '../models/role';

@Component({
    selector: 'app-users-manag',
    templateUrl: './users-manag.component.html',
    styleUrls: ['./users-manag.component.css']
})
export class UsersManagComponent implements OnInit {

    /**
     * User edited / created in the modal
     */
    user: User;

    /**
     * Copy of the user to edit
     */
    userCopy: User = new User();

    /**
     * Title of the modal
     */
    title: string;

    /**
     * Roles available
     */
    userRoles;

    constructor(
        public activeModal: NgbActiveModal,
        private userService: UserService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.defineModalTitle();
        this.userRoles = this.getRoles();
        this.userCopy = Object.assign(this.userCopy, this.user);
    }

    /**
     * Save the user
     */
    save() {
        console.log('save');
        this.user = this.userCopy;
        if (isUndefined(this.user.id)) {
            this.userService.create(this.user).subscribe((user) => {
                console.log(user);
                // TODO creation message
            });
        } else {
            this.userService.update(this.user);
        }
        this.clear(); // TODO remonter dans les succès des promesses

        /*
        this.userService.update(this.user).subscribe(() => {
           this.clear();
        }, () => {
            this.alertService.error('An error occured.');
        });*/
    }

    /**
     * Close the modal
     */
    clear() {
        this.activeModal.dismiss();
    }

    /**
     * Define the modal title
     */
    private defineModalTitle() {
        if (isUndefined(this.user.id)) {
            this.title = 'User creation';
        } else {
            this.title = 'User consultation';
        }
    }

    /**
     * Get Roles available
     */
    getRoles(): Array<string> {
        const keys = Object.keys(Role);
        return keys.slice(keys.length / 2);
    }
}
