import { Routes } from '@angular/router';
import { ToolsComponent } from './pages/tools/tools.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetsComponent } from './pages/projets/projets.component';

export const routes: Routes = [
   {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'tools',
      component: ToolsComponent,
    },
     {
      path: 'projects',
      component: ProjetsComponent,
    },
  
  ];
