import { Component } from '@angular/core';
import { Task, GetTasksService } from '../get-tasks.service';
import { Router } from '@angular/router';

interface category {
    value: string;
    displayName: string;
}

@Component({
    selector: 'create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss']
})

export class CreateTaskComponent {
    categories: category[] = [
        { value: 'learning', displayName: 'Learning' },
        { value: 'meeting', displayName: 'Meeting' },
        { value: 'personal', displayName: 'Personal' },
        { value: 'miscellaneous', displayName: 'Miscellaneous' }
    ];
    currentTask: any = {
        title: '',
        description: '',
        dueDateTime: '',
        reminderDateTime: ''
    };
    selectedCategory: string = '';
    constructor(private getTasksService: GetTasksService, private router: Router) { }
    saveTask(event: any) {
        if (this.currentTask.title && this.selectedCategory && this.currentTask.dueDateTime && this.currentTask.reminderDateTime) {
            let newTask: Task = {
                title: this.currentTask.title,
                description: this.currentTask.description,
                dueDateTime: this.currentTask.dueDateTime.toDateString(),
                reminderDateTime: this.currentTask.reminderDateTime.toDateString(),
                category: this.selectedCategory,
                dueDateTimeStamp: this.currentTask.dueDateTime.getTime(),
                reminderDateTimeStamp: this.currentTask.reminderDateTime.getTime(),
            }
            this.getTasksService.addToTasks(newTask);

            this.router.navigate(['/display-tasks']);
            return false
        }
        return true
    }
}
