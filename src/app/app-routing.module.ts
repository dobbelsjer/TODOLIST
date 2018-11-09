import {Routes} from '@angular/router';
import {ReceptionComponent} from './reception/reception.component';
import {LoginComponent} from './login/login.component';
import {TaskListComponent} from './task-list/task-list.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
    {path: '', component: ReceptionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'tasks-list', component: TaskListComponent},
    {path: 'register', component: RegisterComponent}
];
