import {Component, OnInit} from '@angular/core';
import {Task} from '../models/task';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertService} from '../services-api/alert.service';
import {isUndefined} from 'util';
import {TaskService} from '../services-api/task.service';
import {UserService} from '../services-api/user.service';
import {Role} from '../models/role';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

    task: Task;
    tmpTask: Task = new Task();


    constructor(
        public activeModal: NgbActiveModal,
        private userService: UserService,
        private taskService: TaskService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.tmpTask = Object.assign(this.tmpTask, this.task);
    }

    save() {
        console.log('save');
        this.task = this.tmpTask;
        if (isUndefined(this.task.id)) {
            this.taskService.create(this.task).subscribe((task) => {
                console.log(task);
            });
        } else {
            this.taskService.update(this.task);
        }

        this.clear(); // TODO remonter dans les succès des promesses

        /*
        this.userService.update(this.user).subscribe(() => {
           this.clear();
        }, () => {
            this.alertService.error('An error occured.');
        });*/
    }

    clear() {
        this.activeModal.dismiss();
    }
}
