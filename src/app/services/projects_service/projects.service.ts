import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjectList(): Observable<{img: string, title:string, description: string}[]> {
    return this.http.get("/assets/data/projects.json") as Observable<{img: string, title:string, description: string}[]>
  }
}
