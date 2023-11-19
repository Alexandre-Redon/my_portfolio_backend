import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ProjectsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
