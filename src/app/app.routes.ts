import { Routes } from '@angular/router';
import {LayoutComponent} from "app/layout/layout.component";
import {NoAuthGuard} from "app/core/auth/guards/noAuth.guard";
import {AuthGuard} from "app/core/auth/guards/auth.guard";
import {initialDataResolver} from "app/app.resolvers";

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
      }
    ]
  },
  //Auth routes for authenticated users
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: initialDataResolver
    },
    children: [

      // Dashboards
      {
        path: 'dashboards', children: [
          {path: 'project', loadChildren: () => import('app/modules/dashboards/project/project.routes')}
        ]
      },
      //apps
      {
        path: 'apps',
        children: [
          {
            path: 'settings', loadChildren: () => import('app/modules/apps/settings/settings.routes')
          }
        ]
      }
    ]
  }
];
