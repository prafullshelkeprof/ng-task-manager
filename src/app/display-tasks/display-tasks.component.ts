import { Component, OnInit, ValueProvider } from '@angular/core';
import { Task, GetTasksService } from '../get-tasks.service';

@Component({
    selector: 'display-tasks',
    templateUrl: './display-tasks.component.html',
    styleUrls: ['./display-tasks.component.scss'],
    providers: [GetTasksService]
})
export class DisplayTasksComponent implements OnInit {
    error: any;
    headers: string[] = [];
    tasks: any
    constructor(private getTasksService: GetTasksService) { }

    ngOnInit(): void {
        this.showTasks()
    }
    showTasks(): void {
        this.getTasksService.getTasksList()
            .subscribe(
                (data) => {
                    this.tasks = data;
                }, // success path
                error => this.error = error // error path
            );
    }
}
