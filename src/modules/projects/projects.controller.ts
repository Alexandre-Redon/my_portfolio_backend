import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './entities/projects.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    console.log(this.projectService.findAll());
    return this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    return this.projectService.findById(id);
  }

  @Post(':create')
  async create(@Body() project: Project): Promise<void> {
    this.projectService.create(project);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() project: Project,
  ): Promise<void> {
    return this.projectService.update(id, project);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.projectService.delete(id);
  }
}
