import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  /**
   * SAMPLE DATA
   */
  task01 = new Task(1, 1, 'task 01', true);
  task02 = new Task(2, 1, 'task 02', true);
  task03 = new Task(2, 2, 'task 03', true);
  tasks = [this.task01, this.task02, this.task03];

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get all the tasks for the user connected
   */
  /*findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`api/tasks`);
  }*/

  findAll(): Task[] {
    return this.tasks.filter(task => task.ownerId === 1); // Current user id = 1
  }

  /**
   * Get all the tasks of all users
   */
  /*findAllTasksOfAllUsers(): Task[] {
    return this.http.get<Task[]>(`api/tasks/all`;
  }*/

  findAllTasksOfAllUsers(): Task[] {
    return this.tasks;
  }

  /**
   * Create a task
   * @param task: task to create
   */
  create(task: Task): Observable<Task> {
    const copy = this.convert(task);
    return this.http.post<Task>(`api/tasks`, copy);
  }

  /**
   * Get a task with an id
   * @param id : id of the task searched
   */
  /*findById(id: number): Observable<Task> {
    return this.http.get<Task>(`api/tasks/` + id);
  }*/

  findById(id: number): Task {
    return this.tasks.find(task => task.id === id);
  }

  /**
   * Update a task
   * @param task : task to update
   */
  update(task: Task): Observable<Task> {
    const copy = this.convert(task);
    return this.http.put<Task>(`api/tasks`, copy);
  }

  /**
   * TODO
   * Delete a task
   * @param task : task to delete
   */
  delete(task: Task) {

  }

  /**
   * Convert a Task to a JSON which can be sent to the server
   * @param task : task to convert
   */
  private convert(task: Task) {
    return Object.assign({}, task);
  }
}
