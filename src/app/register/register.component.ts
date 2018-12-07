import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../services-api/alert.service';
import {UserService} from '../services-api/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    model: User = new User;
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                () => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['login']);
                },
                () => {
                    this.alertService.error('Registration impossible. Please contact an administrator.');
                    this.loading = false;
                });
    }
}
