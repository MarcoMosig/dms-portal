import { Routes } from '@angular/router';
import {LayoutComponent} from "app/layout/layout.component";
import {NoAuthGuard} from "app/core/auth/guards/noAuth.guard";

export const appRoutes: Routes = [
  // Auth routes for guests
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
    ]
  },
];
