const getServerConfig = () => {
  // These environment variables are only available on the server
  if (typeof window !== 'undefined') {
    throw new Error('Server config cannot be accessed on the client side');
  }

  const requireEnvVar = (name: string): string => {
    const value = process.env[name];
    if (!value) {
      throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
  };

  return {
    secondNature: {
      apiKey: requireEnvVar('SECOND_NATURE_API_KEY'),
      apiSecret: requireEnvVar('SECOND_NATURE_API_SECRET'),
      baseUrl: process.env.SECOND_NATURE_API_URL || 'https://api.rbp.secondnature.com',
    },
  } as const;
};

export const config = {
  server: getServerConfig,
};
