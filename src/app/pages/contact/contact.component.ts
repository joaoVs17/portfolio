import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contacts:{type: string, value: string, icon: string}[] = [
  {
    type: "Telefone",
    value: "(69) 98493-0898",
    icon: "pi pi-phone"
  },
  {
    type: "Email",
    value: "joaosimao051@gmail.com",
    icon: "pi pi-envelope"
  },
  {
    type: "Github",
    value: "https://github.com/joaoVs17/",
    icon: "pi pi-github"
  }
]

}
