import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseCardComponent } from '@portal/components/card';
import { FuseHighlightComponent } from '@portal/components/highlight';
import { FuseComponentsComponent } from 'app/modules/ui/fuse-components/fuse-components.component';

@Component({
    selector   : 'card',
    templateUrl: './card.component.html',
    standalone : true,
    imports    : [MatIconModule, MatButtonModule, FuseHighlightComponent, MatTabsModule, FuseCardComponent, NgIf],
})
export class CardComponent
{
    /**
     * Constructor
     */
    constructor(private _fuseComponentsComponent: FuseComponentsComponent)
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
        this._fuseComponentsComponent.matDrawer.toggle();
    }
}
