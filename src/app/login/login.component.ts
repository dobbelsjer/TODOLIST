import { Component, OnInit } from '@angular/core';

import { User} from '../models/user';
import {ConnectionService} from '../services-api/connection.service';
import {ActivatedRoute, Router} from '@angular/router';

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
        private connectionService: ConnectionService) {}

    ngOnInit() {
        // reset login status
        this.connectionService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate([this.returnUrl]);
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
