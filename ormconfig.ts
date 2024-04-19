module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  entities: ['dist/entities/*.entities.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    entitiesDir: 'src/entities',
    migrationDir: 'src/migrations'
  }
}