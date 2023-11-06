import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ROUTES } from '../routes';

const routes: Routes = [
  {
    path: ROUTES.tabs.root,
    component: TabsPage,
    children: [
      {
        path: ROUTES.tabs.home,
        loadComponent: () => import('../features/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: `/${ROUTES.tabs.root}/${ROUTES.tabs.home}`,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: `/${ROUTES.tabs.root}/${ROUTES.tabs.home}`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
