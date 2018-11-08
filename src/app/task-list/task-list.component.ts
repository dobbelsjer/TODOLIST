import { Component, OnInit } from '@angular/core';
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
        private taskService: TaskService
    ) { }

    ngOnInit() {
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
}
