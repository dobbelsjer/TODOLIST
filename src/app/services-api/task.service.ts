import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private baseUrl = 'http://localhost:8080';

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Get all the tasks for the user connected
     */
    findAll(idUser: number): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.baseUrl}/api/tasks/user/` + idUser);
    }

    /**
     * Get all the tasks of all users
     */
    findAllTasksOfAllUsers(): Observable<Task[]>  {
        return this.http.get<Task[]>(`${this.baseUrl}/api/tasks/all`);
    }

    /**
     * Create a task
     * @param task: task to create
     */
    create(task: Task): Observable<Task> {
        const copy = this.convert(task);
        return this.http.post<Task>(`${this.baseUrl}/api/tasks`, copy);
    }

    /**
     * Get a task with an id
     * @param id : id of the task searched
     */
    findById(id: number): Observable<Task> {
        return this.http.get<Task>(`${this.baseUrl}/api/tasks/` + id);
    }

    /**
     * Update a task
     * @param task : task to update
     */
    update(task: Task): Observable<Task> {
        const copy = this.convert(task);
        return this.http.put<Task>(`${this.baseUrl}/api/tasks/` + task.id, copy);
    }

    /**
     * Delete a task
     * @param id : task's id to delete
     */
    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/api/tasks/` + id);
    }

    /**
     * Convert a Task to a JSON which can be sent to the server
     * @param task : task to convert
     */
    private convert(task: Task) {
        return Object.assign({}, task);
    }
}
