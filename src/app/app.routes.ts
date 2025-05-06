import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
        canActivate: [AuthGuard]
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./pages/pedidos/pedidos.routes').then((m) => m.PedidosRoutes),
        canActivate: [AuthGuard]
      },
      {
        path: 'comandas',
        loadChildren: () => import('./pages/comandas/comandas.routes').then((m) => m.ComandasRoutes),
        canActivate: [AuthGuard]
      },
      {
        path: 'solicitacoes',
        loadChildren: () => import('./pages/solicitacoes/solicitacoes.routes').then((m) => m.SolicitacoesRoutes),
        canActivate: [AuthGuard]
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard]
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
