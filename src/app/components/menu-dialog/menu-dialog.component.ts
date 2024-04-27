import { Component, HostListener } from '@angular/core';
import { MatDialogTitle,MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { DialogService } from '../../services/dialog_service/dialog.service';

@Component({
  selector: 'app-menu-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, CommonModule, RouterLink],
  templateUrl: './menu-dialog.component.html',
  styleUrl: './menu-dialog.component.scss'
})
export class MenuDialogComponent implements OnDestroy {

  @HostListener('document:keydown.control.k', ['$event'])
  closeDialog(event:any){
    event?.preventDefault()
    this.closePopUp()
  }

  closePopUp() {
    this.ref.close()
  }


  constructor(private ref: MatDialogRef<MenuDialogComponent>, private dialogService: DialogService){}

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
  ngOnDestroy(): void {
      this.dialogService.isDialogOpened.next(false);
  }

}
