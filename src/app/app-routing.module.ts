import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';

const routes: Routes = [
    { path: 'create-task', component: CreateTaskComponent },
    { path: 'display-tasks', component: DisplayTasksComponent },
    { path: '', redirectTo: '/display-tasks', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
