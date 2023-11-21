import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfiguration from './database.configuration';
import appConfiguration from './app.configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

export default [
  ConfigModule.forRoot({
    load: [appConfiguration, databaseConfiguration],
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return {
        type: configService.getOrThrow<string>('db_kind') as 'postgres',
        host: configService.getOrThrow<string>('db_host'),
        port: configService.getOrThrow<number>('db_port'),
        username: configService.getOrThrow<string>('db_user'),
        password: configService.getOrThrow<string>('db_pass'),
        database: configService.getOrThrow<string>('db_name'),
        entities: [],
        autoLoadEntities: true,
        ssl: true,
      };
    },
  }),
  ScheduleModule.forRoot(),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
  }),
];
