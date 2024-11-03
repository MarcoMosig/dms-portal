import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseHighlightComponent } from '@portal/components/highlight';
import { OtherComponentsComponent } from 'app/modules/ui/other-components/other-components.component';

@Component({
    selector   : 'messages',
    templateUrl: './messages.component.html',
    standalone : true,
    imports    : [MatIconModule, MatButtonModule, FuseHighlightComponent],
})
export class MessagesComponent
{
    /**
     * Constructor
     */
    constructor(private _otherComponentsComponent: OtherComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._otherComponentsComponent.matDrawer.toggle();
    }
}
