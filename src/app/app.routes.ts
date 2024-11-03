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
      },

      // User Interface
      {path: 'ui', children: [

          // Material Components
          {path: 'material-components', loadChildren: () => import('app/modules/ui/material-components/material-components.routes')},

          // Fuse Components
          {path: 'fuse-components', loadChildren: () => import('app/modules/ui/fuse-components/fuse-components.routes')},

          // Other Components
          {path: 'other-components', loadChildren: () => import('app/modules/ui/other-components/other-components.routes')},

          // TailwindCSS
          {path: 'tailwindcss', loadChildren: () => import('app/modules/ui/tailwindcss/tailwindcss.routes')},

          // Advanced Search
          {path: 'advanced-search', loadChildren: () => import('app/modules/ui/advanced-search/advanced-search.routes')},

          // Animations
          {path: 'animations', loadChildren: () => import('app/modules/ui/animations/animations.routes')},

          // Cards
          {path: 'cards', loadChildren: () => import('app/modules/ui/cards/cards.routes')},

          // Colors
          {path: 'colors', loadChildren: () => import('app/modules/ui/colors/colors.routes')},

          // Confirmation Dialog
          {path: 'confirmation-dialog', loadChildren: () => import('app/modules/ui/confirmation-dialog/confirmation-dialog.routes')},

          // Datatable
          {path: 'datatable', loadChildren: () => import('app/modules/ui/datatable/datatable.routes')},

          // Forms
          {path: 'forms', loadChildren: () => import('app/modules/ui/forms/forms.routes')},

          // Icons
          {path: 'icons', loadChildren: () => import('app/modules/ui/icons/icons.routes')},

          // Page Layouts
          {path: 'page-layouts', loadChildren: () => import('app/modules/ui/page-layouts/page-layouts.routes')},

          // Typography
          {path: 'typography', loadChildren: () => import('app/modules/ui/typography/typography.routes')}
        ]},

      // Documentation
      {path: 'docs', children: [
          // Guides
          {path: 'guides', loadChildren: () => import('app/modules/docs/guides/guides.routes')}
        ]},

      // 404 & Catch all
      {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/pages/error/error-404/error-404.routes')},
      {path: '**', redirectTo: '404-not-found'}
    ]
  }
];
