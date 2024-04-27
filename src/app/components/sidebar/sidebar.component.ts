import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  topics:any[] = [
    {
      title: "Sobre Mim",
      icon: "pi pi-address-book",
    },
    {
      title: "Projetos",
      icon: "pi pi-hammer",
    },
    {
      title: "Contato",
      icon: "pi pi-phone"
    }
  ];

  collapsed:Boolean = true;

  toggleCollapse(){
    this.collapsed = !this.collapsed
  }

}
