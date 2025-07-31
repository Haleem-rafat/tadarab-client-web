interface EnvConfig {
  NODE_ENV: string;
  API_URL: string;
  APP_URL: string;
  ENVIRONMENT: string;
}

const getEnvConfig = (): EnvConfig => {
  // eslint-disable-next-line no-undef
  const nodeEnv = process.env.NODE_ENV || 'development';

  const configs = {
    development: {
      NODE_ENV: 'development',
      API_URL: 'https://staging-api.tadarab.com/api',
      APP_URL: 'https://staging-api.tadarab.com/',
      ENVIRONMENT: 'development',
    },
    production: {
      NODE_ENV: 'production',
      API_URL: 'https://staging-api.tadarab.com/api',
      APP_URL: 'https://tadarab.com',
      ENVIRONMENT: 'production',
    },
    test: {
      NODE_ENV: 'test',
      API_URL: 'https://staging-api.tadarab.com/api',
      APP_URL: 'https://staging-api.tadarab.com/',
      ENVIRONMENT: 'test',
    },
  };

  return configs[nodeEnv as keyof typeof configs] || configs.development;
};

export const envConfig = getEnvConfig();
