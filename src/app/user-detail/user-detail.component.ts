import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../models/user';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    user: User;

    constructor(
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
    }

    /**
     * Close the modal
     */
    clear() {
        this.activeModal.dismiss();
    }

}
