import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {UsersManagComponent} from './users-manag.component';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../models/user';
import {Role} from '../models/role';
import {UserService} from '../services-api/user.service';

describe('UsersManagComponent', () => {
  let component: UsersManagComponent;
  let fixture: ComponentFixture<UsersManagComponent>;
  let backend = HttpTestingController;
  let service = UserService;

  const userData = new User(1, 'login', 'password', Role[Role.USER], true);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ UsersManagComponent ],
        imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersManagComponent);
    component = fixture.componentInstance;
    component.user = userData;
    service = TestBed.get(UserService);
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
