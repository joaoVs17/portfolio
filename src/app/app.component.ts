import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from './services/dialog_service/dialog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'João Vitor Simão - Web Dev';

  @HostListener('document:keydown.control.k', ['$event'])
  openModal(event: any) {
    event?.preventDefault()
    if (this.dialogService.isDialogOpened.getValue()) return;
    this.dialog.open(MenuDialogComponent, {
      width: '428px',
      height: '256px'
    });
    this.dialogService.isDialogOpened.next(true);
  }

  constructor(private dialog: MatDialog, private dialogService: DialogService) {

  }


}
