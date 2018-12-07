import {TestBed} from '@angular/core/testing';

import {TaskService} from './task.service';
import {HttpRequest} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Task} from '../models/task';

describe('TaskService', () => {

    const expectedTask01 = new Task(1, 1, 'content01', false);
    const expectedTask02 = new Task(2, 1, 'content02', true);
    const expectedTask03 = new Task(3, 2, 'content03', true);
    const expectedTasksUser1 = [expectedTask01, expectedTask02];
    const expectedAllTasks = [expectedTask01, expectedTask02, expectedTask03];

    let backend: HttpTestingController;
    let service: TaskService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TaskService],
            imports: [HttpClientTestingModule]
        });

        service = TestBed.get(TaskService);
        backend = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call GET method return all tasks of user 1', () => {
        let actualDataAll = {};

        service.findAll().subscribe(data => actualDataAll = data);

        backend.expectOne((req: HttpRequest<any>) => {
            return req.url === '/api/tasks' && req.method === 'GET';
        }, `GET all tasks of user 1 from ${'api/tasks'}`)
            .flush(expectedTasksUser1);
        expect(actualDataAll).toEqual(expectedTasksUser1);
    });

    it('should call GET method return all tasks', () => {
        let actualDataAll = {};

        service.findAllTasksOfAllUsers().subscribe(data => actualDataAll = data);

        backend.expectOne((req: HttpRequest<any>) => {
            return req.url === '/api/tasks/all' && req.method === 'GET';
        }, `GET all tasks from ${'api/tasks/all'}`)
            .flush(expectedAllTasks);
        expect(actualDataAll).toEqual(expectedAllTasks);
    });

    it('should call GET method return one task by id', () => {
        let actualData = {};

        service.findById(1).subscribe(data => actualData = data);

        backend.expectOne((req: HttpRequest<any>) => {
            return req.url === '/api/tasks/1' && req.method === 'GET';
        }, `GET one user from ${'api/tasks/1'}`)
            .flush(expectedTask01);
        expect(actualData).toEqual(expectedTask01);
    });

    it('should call PUT method (update a task) and return the result', () => {
        let actualData = {};
        expectedTask01.done = true;

        service.update(expectedTask01).subscribe(data => actualData = data);

        backend.expectOne((req: HttpRequest<any>) => {
            return req.url === '/api/tasks/1' && req.method === 'PUT';
        }, `PUT update status task from ${'api/tasks/1'}`)
            .flush(expectedTask01);
        expect(actualData).toEqual(expectedTask01);
    });

    it('should call POST method (create task) and return the result', () => {
        let actualData = {};
        expectedTask01.id = undefined;

        service.create(expectedTask01).subscribe(data => actualData = data);

        backend.expectOne((req: HttpRequest<any>) => {
            return req.url === '/api/tasks' && req.method === 'POST';
        }, `POST create user from ${'api/tasks'}`)
            .flush(expectedTask01);
        expect(actualData).toEqual(expectedTask01);
    });
});
