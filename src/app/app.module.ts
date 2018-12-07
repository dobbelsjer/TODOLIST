import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {TaskListComponent} from './task-list/task-list.component';
import { LoginComponent } from './login/login.component';
import {routes} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { ReceptionComponent } from './reception/reception.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { UsersManagComponent } from './users-manag/users-manag.component';
import { AlertComponent } from './alert/alert.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        LoginComponent,
        ReceptionComponent,
        RegisterComponent,
        MenuComponent,
        UsersManagComponent,
        AlertComponent,
        UserDetailComponent,
        UserListComponent,
        TaskFormComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {useHash: true}),
        FormsModule,
        HttpClientModule,
        NgbModule
    ],
    entryComponents: [TaskFormComponent, UsersManagComponent],
    providers: [NgbModalConfig, NgbModal],
    bootstrap: [AppComponent]
})
export class AppModule { }
