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

@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        LoginComponent,
        ReceptionComponent,
        RegisterComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {useHash: true}),
        FormsModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [NgbModalConfig, NgbModal],
    bootstrap: [AppComponent]
})
export class AppModule { }
