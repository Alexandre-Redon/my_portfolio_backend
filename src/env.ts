import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

import { config } from 'dotenv';
config();

export const env = createEnv({
  server: {
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.string(),
    DATABASE_USER: z.string(),
    DATABASE_PASS: z.string(),
    DATABASE_NAME: z.string(),
    DATABASE_KIND: z.string(),
    BASE_URL: z.string(),
  },
  clientPrefix: 'PUBLIC_',
  client: {},
  runtimeEnv: process.env,
});
