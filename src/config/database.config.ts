import { registerAs } from '@nestjs/config';
import { join } from 'path';

export const databaseConfig = registerAs('mysql', () => ({
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'l',
  entities: [join(__dirname + '/../**/*.entity{.ts,.js}')],
  synchronize: false,
}));
