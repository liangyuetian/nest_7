import { registerAs } from '@nestjs/config';

export const baseConfig = registerAs('base', () => ({
  port: 8942,
  NODE_ENV: 'production',
  API_AUTH_ENABLED: true,
}));
