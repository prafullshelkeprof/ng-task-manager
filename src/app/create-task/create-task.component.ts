import { Component } from '@angular/core';

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
    selectedCategory: string;
    constructor() { }
    saveTask() {
        
    }
}
