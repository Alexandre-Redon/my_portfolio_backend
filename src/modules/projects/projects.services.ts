import { Injectable } from '@nestjs/common';
import { Project } from './entities/projects.entitiy';

@Injectable()
export class ProjectsService {
  private readonly projects: Project[] = [];

  create(project: Project): void {
    this.projects.push(project);
  }

  findAll(): Project[] {
    return this.projects;
  }

  findById(id: number): Project {
    return this.projects.find((project) => project.id === id);
  }

  update(id: number, project: Project): void {
    const index = this.projects.findIndex((project) => project.id === id);
    this.projects[index] = project;
  }

  delete(id: number): void {
    const index = this.projects.findIndex((project) => project.id === id);
    this.projects.splice(index, 1);
  }
}
