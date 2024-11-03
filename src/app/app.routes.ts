import { Routes } from '@angular/router';
import {LayoutComponent} from "app/layout/layout.component";
import {NoAuthGuard} from "app/core/auth/guards/noAuth.guard";

export const appRoutes: Routes = [
  // Redirect empty path to '/dashboards/project'
  {path: '', pathMatch : 'full', redirectTo: 'dashboards/project'},

  // Redirect signed-in user to the '/dashboards/project'
  //
  // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboards/project'},
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
      {
        path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')
      },
      {
        path: 'settings', loadChildren: () => import('app/modules/apps/settings/settings.routes')
      }
    ]
  },
];
