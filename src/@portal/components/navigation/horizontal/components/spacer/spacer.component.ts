import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FuseHorizontalNavigationComponent } from '@portal/components/navigation/horizontal/horizontal.component';
import { FuseNavigationService } from '@portal/components/navigation/navigation.service';
import { FuseNavigationItem } from '@portal/components/navigation/navigation.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector       : 'fuse-horizontal-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [NgClass],
})
export class FuseHorizontalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
  // @ts-ignore
    @Input() item: FuseNavigationItem;
  // @ts-ignore
    @Input() name: string;
// @ts-ignore
    private _fuseHorizontalNavigationComponent: FuseHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._fuseHorizontalNavigationComponent = this._fuseNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._fuseHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll),
        ).subscribe(() =>
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
