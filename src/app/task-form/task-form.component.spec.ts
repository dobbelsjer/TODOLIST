import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskFormComponent} from './task-form.component';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../models/user';
import {Role} from '../models/role';
import {UserService} from '../services-api/user.service';
import {Task} from '../models/task';
import {TaskService} from '../services-api/task.service';

describe('TaskFormComponent', () => {
    let component: TaskFormComponent;
    let fixture: ComponentFixture<TaskFormComponent>;
    let backend = HttpTestingController;
    let service = TaskService;

    const taskData = new Task(1, 2, 'Test', true);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TaskFormComponent ],
            imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [NgbActiveModal]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskFormComponent);
        component = fixture.componentInstance;
        component.task = taskData;
        service = TestBed.get(TaskService);
        backend = TestBed.get(HttpTestingController);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('call ngOnInit should call getRoles() function', () => {
        const spy = spyOn(component, 'getRoles');
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
    });
});
