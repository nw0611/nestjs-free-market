import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        autoLoadEntities: true,
        entities: ['dist/entities/*.entities.js'],
        migrations: ['dist/migrations/*/js'],
      }
    ),
    AuthModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
