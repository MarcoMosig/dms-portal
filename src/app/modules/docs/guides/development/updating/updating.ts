import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GuidesComponent } from 'app/modules/docs/guides/guides.component';

@Component({
    selector   : 'updating',
    templateUrl: './updating.html',
    standalone : true,
    imports    : [MatIconModule, MatButtonModule],
})
export class UpdatingComponent
{
    constructor(private _guidesComponent: GuidesComponent)
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
        this._guidesComponent.matDrawer.toggle();
    }
}
