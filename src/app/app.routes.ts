import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', title: 'Home', component: HomeComponent},
    {path: 'about_me', title: 'Sobre Mim', component: AboutMeComponent},
    {path: 'projects', title: 'Meus Projetos', component: ProjectsComponent},
    {path: 'contact', title: 'Contato', component: ContactComponent},
];
