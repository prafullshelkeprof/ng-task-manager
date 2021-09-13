# NgTaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Application Detail
1. It is a simple single page application which allows users to create and display tasks
2. It also supports routing. This application has two links in the toolbar, i.e. display tasks page and create task page
3. Display tasks page is working as a home page. It seggregates the tasks in 4 categories. Tasks are sorted according to their due date. Tasks of which the due date is already passed or the due date is after 7 days are not shown.
4. This page is responsive. Mobile first approach is used and media queries are added for tablet and desktop views. In mobile view only 1 column is shown, for tablets 2 and for desktop all 4 columns are shown side by side
5. Create task page allows user to create tasks. On successful task creation it adds newly created task in the list of tasks according to the category.
6. angular material is used to align the goal with the material design.
7. It also makes an http request to get the saved tasks. Both saved tasks and newly created tasks are displayed on the display task page.
8. Application is tested on the latest version of chrome, firefox and IE Edge.

## Application Improvements
1. Edit button on the task to update the task details
2. Delete button to delete the task
3. Done button to complete the task
4. Send push notifications as the reminder date time is hit
5. Unit testing could be added, given more time

## Author's Take
It was a fun excersize and interesting brainstorming was needed for it.
I learned few latest things during implementation of the task.
Thanks for the opportunity.