import { Component } from '@angular/core';

@Component({
    selector: 'sidebar-pane',
    templateUrl: './sidebar-pane.component.html',
    styleUrls: ['./sidebar-pane.component.scss']
})
export class SidebarPaneComponent {
    showFiller: Boolean = true;
    constructor() { }

}
