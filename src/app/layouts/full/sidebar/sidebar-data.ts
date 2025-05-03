import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Menu',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
    bgcolor: 'success',
  },
  {
    displayName: 'Solicitações',
    iconName: 'archive',
    route: '/solicitacoes/listar',
    bgcolor: 'success',
    notificacoesPendentes: 0,
  },
  {
    displayName: 'Pedidos',
    iconName: 'info-circle',
    route: '/pedidos/listar',
    bgcolor: 'success',
  },
  {
    displayName: 'Comandas',
    iconName: 'info-circle',
    route: '/comandas/listar',
    bgcolor: 'success',
  },
];
