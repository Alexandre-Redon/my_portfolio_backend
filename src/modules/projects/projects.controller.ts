import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProjectsService } from './projects.services';
import { Project } from './entities/projects.entitiy';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project> {
    return this.projectService.findById(id);
  }

  @Post()
  async create(@Body() project: Project): Promise<void> {
    this.projectService.create(project);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() project: Project,
  ): Promise<void> {
    return this.projectService.update(id, project);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.projectService.delete(id);
  }
}
