import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {TaskService} from '../services-api/task.service';
import {Task} from '../models/task';
import {User} from '../models/user';
import {TaskFormComponent} from '../task-form/task-form.component';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    tasks: Task[];
    currentUser: User;

    constructor(
        private modalService: NgbModal,
        private config: NgbModalConfig,
        private taskService: TaskService
    ) { }

    ngOnInit() {

        // Asynchronus call :  this.taskService.findAll().subscribe(tasks => this.tasks = tasks);
        this.config.backdrop = 'static';
        this.config.keyboard = false;
        //temporaire ?
        this.taskService.findAll(1).subscribe(tasks => this.tasks = tasks);
    }

    /**
     * Update task status Done/Undone
     */
    changeTaskStatus(task: Task) {
        console.log(task.done);
        this.taskService.update(task);
    }

    update(task: Task) {
        const modalRef = this.modalService.open(TaskFormComponent);
        modalRef.componentInstance.task = task;
    }

    delete(task: Task) {
        console.log('delete');
        this.taskService.delete(task.id);
    }

    newTask(){
        const modalRef = this.modalService.open(TaskFormComponent);
        const newTask = new Task();
        newTask.done = false;
        //newTask.ownerId = this.currentUser.id;
        modalRef.componentInstance.task = newTask;
    }

}
