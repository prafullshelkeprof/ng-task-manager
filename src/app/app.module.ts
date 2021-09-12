import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { SidebarPaneComponent } from './sidebar-pane/sidebar-pane.component';


@NgModule({
    declarations: [
        AppComponent,
        CreateTaskComponent,
        ShowTaskComponent,
        SidebarPaneComponent,
        DisplayTasksComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        MatDatepickerModule,
        MatButtonModule,
        MatNativeDateModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
