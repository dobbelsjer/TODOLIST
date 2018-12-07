import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConnectionService} from '../services-api/connection.service';
import {AlertService} from '../services-api/alert.service';
import {User} from '../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: User = new User();
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: ConnectionService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isAdmin', 'true');
        // this.router.navigate([this.returnUrl]);
        window.location.href = '/';

        /*this.authenticationService.login(this.model.login, this.model.password)
            .subscribe(
                () => {
                    localStorage.setItem('isLoggedIn', 'true');
                    this.router.navigate([this.returnUrl]);
                },
                () => {
                    this.alertService.error('Login impossible. Please verify your login and password.');
                    this.loading = false;
                });*/
    }
}
