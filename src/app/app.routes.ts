import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => HomeComponent },
  {
    path: 'projects',
    loadComponent: () => ProjectsComponent,
  },
  { path: 'about', loadComponent: () => AboutComponent },
  { path: 'contact', loadComponent: () => ContactComponent },
];
