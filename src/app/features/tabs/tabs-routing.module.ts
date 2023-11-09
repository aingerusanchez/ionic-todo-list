import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ROUTES } from '../../routes';

const routes: Routes = [
  {
    path: ROUTES.tabs.root,
    component: TabsPage,
    children: [
      {
        path: ROUTES.tabs.home,
        loadComponent: () => import('../home/home.component').then(m => m.HomeComponent)
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
export class TabsPageRoutingModule { }
