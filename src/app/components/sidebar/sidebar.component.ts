import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  topics:any[] = [
    {
      title: "Sobre Mim",
      icon: "pi pi-address-book",
      link: "about_me"
    },
    {
      title: "Projetos",
      icon: "pi pi-hammer",
      link: "projects"
    },
    {
      title: "Contato",
      icon: "pi pi-phone",
      link: "contact"
    }
  ];

  collapsed:Boolean = true;

  toggleCollapse(){
    this.collapsed = !this.collapsed
  }

}
