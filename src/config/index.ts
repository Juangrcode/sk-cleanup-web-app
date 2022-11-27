interface Config {
  keyName: string;
  publicApiKeyToken: string;
  apiUsers: string;
}

const config: Config = {
  keyName: 'skCleanupLogged',

  publicApiKeyToken: process.env.NEXT_PUBLIC_API_KEY_TOKEN || '',
  apiUsers: process.env.NEXT_PUBLIC_API_USERS || 'http://localhost:8080',
};

console.log({ config });

export default config;
