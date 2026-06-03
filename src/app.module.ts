import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutasModule } from './rutas/rutas.module';
import { ServiceModule } from './service/service.module';
import { LogisticaModule } from './logistica/logistica.module';
import { PaquetesModule } from './paquetes/paquetes.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

RutasModule,
    ServiceModule,
    LogisticaModule,
    PaquetesModule,
    RutasModule,
  ],
})
export class AppModule {}
