import { Component, OnInit } from '@angular/core';
import {NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TaskService} from '../services-api/task.service';
import {Task} from '../models/task';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    tasks: Task[];

    constructor(
        private config: NgbModalConfig,
        private modalService: NgbModal,
        private taskService: TaskService
    ) { }

    ngOnInit() {
        // customize default values of modals used by this component tree
        this.config.backdrop = 'static';
        this.config.keyboard = false;

        // Asynchronus call :  this.taskService.findAll().subscribe(tasks => this.tasks = tasks);
        this.tasks = this.taskService.findAll();
    }

    /**
     * Update task status Done/Undone
     */
    changeTaskStatus(task: Task) {
        console.log(task.done);
        this.taskService.update(task);
    }

    open(content) {
        this.modalService.open(content);
    }
}
