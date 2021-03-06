import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Task {
    title: string;
    description: string;
    category: string;
    reminderDateTime: string;
    dueDateTime: string;
    dueDateTimeStamp: number,
    reminderDateTimeStamp: number
}

@Injectable({
    providedIn: 'root'
})

export class GetTasksService {
    constructor(private http: HttpClient) { }
    configUrl = 'assets/tasks-list.json';
    newlyAddedTasks: Task[] = [];
    savedTasks: Task[] = [];

    getSavedTasks() {
        return this.http.get<Task[]>(this.configUrl)
            .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError), // then handle the error
               
            )
    }
    getNewlyAddedTasks() {
        return this.newlyAddedTasks;
    }
    addToTasks(task: Task) {
        this.newlyAddedTasks.push(task);
    }
    
    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
            'Something bad happened; please try again later.');
    }

}