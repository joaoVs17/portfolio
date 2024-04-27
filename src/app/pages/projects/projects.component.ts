import { Component } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';
import { ProjectsService } from '../../services/projects_service/projects.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [HttpClient, HttpClientModule, ProjectsService]
})
export class ProjectsComponent {

  projects_data:{img:string, title:string, description:string}[] = [];

  constructor(private projects: ProjectsService) {
    projects.getProjectList().subscribe(res => {
      this.projects_data = res;
    });
  }

}
