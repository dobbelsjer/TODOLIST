import { Component, OnInit } from '@angular/core';
import {UserService} from '../services-api/user.service';
import {User} from '../models/user';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserDetailComponent} from '../user-detail/user-detail.component';
import {UsersManagComponent} from '../users-manag/users-manag.component';
import {Role} from '../models/role';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: User[] = [];

    constructor(
        private userService: UserService,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.userService.getAll().subscribe(users => this.users = users);
    }

    changeUserStatus(user: User) {
        console.log(user.active);
        this.userService.update(user);
    }

    edit(user: User) {
        const modalRef = this.modalService.open(UsersManagComponent);
        modalRef.componentInstance.user = user;
    }

    delete(user: User) {
        this.userService.delete(user.id).subscribe(() => {
            this.users.filter(value => value !== user); // Removed item for front side
        });
    }

    redirectToUserPage(user: User) {
        const modalRef = this.modalService.open(UserDetailComponent);
        modalRef.componentInstance.user = user;
    }

    ban(user: User) {
        user.active = false;
        this.userService.ban(user);
    }

    createUser() {
        const modalRef = this.modalService.open(UsersManagComponent);
        const userToCreate = new User();
        userToCreate.role = Role[Role.USER];
        modalRef.componentInstance.user = userToCreate;
    }

    updateUsersList(event) {
        console.log('updateUsersList');
        console.log(event);
    }
}
