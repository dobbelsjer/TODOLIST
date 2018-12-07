import {Routes} from '@angular/router';
import {ReceptionComponent} from './reception/reception.component';
import {LoginComponent} from './login/login.component';
import {TaskListComponent} from './task-list/task-list.component';
import {RegisterComponent} from './register/register.component';
import {UsersManagComponent} from './users-manag/users-manag.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

export const routes: Routes = [
    {path: '', component: ReceptionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'tasks-list', component: TaskListComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'UserL', component: UserListComponent},
    {path: 'User/:id', component: UserDetailComponent},
];
