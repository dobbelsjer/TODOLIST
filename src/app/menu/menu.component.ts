import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models/user';
import {UserDetailComponent} from '../user-detail/user-detail.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../services-api/user.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    returnUrl: string;
    isLoggedIn: Boolean = localStorage.getItem('isLoggedIn') != null;
    isAdmin: Boolean = localStorage.getItem('isAdmin') != null;


    constructor(
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isAdmin');
        window.location.href = '/';
    }

    redirectToProfile() {
        // TODO get user connected
        const modalRef = this.modalService.open(UserDetailComponent);
        modalRef.componentInstance.user = this.userService.getById(1);

    }
}
