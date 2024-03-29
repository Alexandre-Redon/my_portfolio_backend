import { Injectable } from '@nestjs/common';
import { Project } from './entities/projects.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(project: Project): Promise<void> {
    this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findById(id: string): Promise<Project> {
    return this.projectRepository.findOneBy({ id });
  }

  async update(id: string, project: Project): Promise<void> {
    await this.projectRepository.update(id, project);
  }

  async delete(id: string): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
