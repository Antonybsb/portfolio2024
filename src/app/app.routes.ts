import { Routes } from '@angular/router';

//Component pages
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { PortfolioComponent } from './modules/portfolio/pages/portfolio/portfolio.component';
import { LayoutComponent } from './modules/portfolio/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', // Redireciona para a rota '/home'
    pathMatch: 'full' // Garante que a rota vazia seja correspondida exatamente
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'portfolio', component: PortfolioComponent },
    ],
  },
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'portfolio',
  //   component: PortfolioComponent
  // },
];
