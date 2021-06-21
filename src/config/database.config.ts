import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('mysql', () => ({
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'l',
  entities: Object.values({}),
  synchronize: true,
}));
