import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { DashboardPage } from './pages/dashboard/dashboard.page';

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
        component: DashboardPage
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./pages/pedidos/pedidos.routes').then((m) => m.PedidosRoutes),
      },
      {
        path: 'comandas',
        loadChildren: () => import('./pages/comandas/comandas.routes').then((m) => m.ComandasRoutes),
      },
      {
        path: 'solicitacoes',
        loadChildren: () => import('./pages/solicitacoes/solicitacoes.routes').then((m) => m.SolicitacoesRoutes),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/authentication/authentication.routes').then((m) => m.AuthenticationRoutes),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
