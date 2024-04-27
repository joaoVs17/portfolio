import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public isDialogOpened: BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);
  constructor() { }

}
