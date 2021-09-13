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
2. It supports routing as wll. This application has two links in the toolbar, i.e. display task page and create task page
3. Display tasks page is working as a home page. It seggregates the tasks in 4 categories. Tasks are sorted accoring to due their due date. Tasks whose due date is already passed and whose due date is after 7 days are not shown.
4. This page is responsive. Mobile first approach is used and media queries are added for tablet and desktop views. In mobile view only 1 column is shown, for tablets 2 and for desktop all 4 columns are shown side by side
5. Create task page allows user to create tasks. On successful task creation it adds newly added task in the display tasks accorindg to their category.
6. angular material is used to align our goal with the material design.
7. It also makes a http request to get the saved tasks. Saved tasks and newly created tasks both are displayed on the display task page.
8. Application is tested on the latest version of chrome and firefox.

## Application Improvements
1. Edit button on the task to update the task details
2. Delete button to delete the task
3. Done button to complete the task
4. Send push notifications as the reminder date time is hit
5. Code could be optimized more
6. Should have tested code on more browsers
7. Unit testing should have been added

## Author's Takske
It was a fun excersize and a lot of brainstorming was needed for it. I had a fun to do the task.
I learned a lot of new things with this execersize.
Thanks for the opportunity.