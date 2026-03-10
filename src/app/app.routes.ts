import { Routes } from '@angular/router';
import { PrivateLayoutComponent } from './private/_layout/layout.component';
import { LayoutComponent } from './public/_layout/layout.component';
import { LoginComponent } from './public/pages/login/login.component';
import { HomeComponent } from './private/pages/home/home.component';
import { authGuard } from './shared/guards/auth.guard';
import { FavoritesComponent } from './private/pages/favorites/favorites.component';

export const routes: Routes = [
  {
    path: 'public',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'private',
    canActivate: [authGuard],
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];
