import { Component } from '@angular/core';
import { Task, GetTasksService } from '../get-tasks.service';

interface category {
    value: string;
    displayName: string;
}
@Component({
    selector: 'display-tasks',
    templateUrl: './display-tasks.component.html',
    styleUrls: ['./display-tasks.component.scss']
})
export class DisplayTasksComponent {

    categories: category[] = [
        { value: 'learning', displayName: 'Learning' },
        { value: 'meeting', displayName: 'Meeting' },
        { value: 'personal', displayName: 'Personal' },
        { value: 'miscellaneous', displayName: 'Miscellaneous' }
    ];

    error: any;
    headers: string[] = [];
    newlyAddedTasks: Task[] = this.getTasksService.getNewlyAddedTasks();
    savedTasks: Task[] = [];
    filteredTasks: Task[] = [];
    displayData: [string, Task[]][];
    reminderDate: string = '';
    dueDate: string = '';
    todaysDate: number;
    seventhDayFromNow: number;
    constructor(private getTasksService: GetTasksService) {
        this.setSeventhDayTime()
    }



    ngOnInit(): void {
        this.getNewlyAddedTasks();
        this.getSavedTasks();
    }
    setSeventhDayTime() {
        let date = new Date();
        this.todaysDate = new Date(date.getTime()).getTime();
        this.seventhDayFromNow = date.setDate(date.getDate() + 7);
    }
    getSavedTasks(): void {
        this.getTasksService.getSavedTasks()
            .subscribe((data: Task[]) => {
                if (data && data.length) {
                    this.savedTasks = data;
                }
                this.getNewlyAddedTasks();
                this.updateFilteredTask();
            });
    }
    getNewlyAddedTasks() {
        this.getTasksService.getNewlyAddedTasks()
    }
    updateFilteredTask() {
        this.filteredTasks = [];
        this.newlyAddedTasks.reduce((prev: Task[], currentTask: Task) => {
            if (currentTask.dueDateTimeStamp > this.todaysDate && currentTask.dueDateTimeStamp < this.seventhDayFromNow) {
                prev.push(currentTask);
            }
            return prev;
        }, this.filteredTasks);

        this.savedTasks.reduce((prev: Task[], currentTask: Task) => {
            if (currentTask.dueDateTimeStamp > this.todaysDate && currentTask.dueDateTimeStamp < this.seventhDayFromNow) {
                prev.push(currentTask);
            }
            return prev;
        }, this.filteredTasks);
        this.filteredTasks.sort((a, b) => a.dueDateTimeStamp - b.dueDateTimeStamp);
        this.displayData = this.categories.map(currentCategory => {
            let data:Task[] = this.filteredTasks.filter((currentTask: Task) => {
                return currentTask.category === currentCategory.value;
            })
            return [currentCategory.value, data];
        })
    }
}
