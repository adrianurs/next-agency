const pre_validation_env = {
  mongo_url: process.env.MONGO_URL,
  next_public_api_url: process.env.NEXT_PUBLIC_API_URL,
  auth_secret: process.env.AUTH_SECRET,
  github_client_id: process.env.GITHUB_CLIENT_ID,
  github_secret: process.env.GITHUB_SECRET,
  gitlab_client_id: process.env.GITLAB_CLIENT_ID,
  gitlab_secret: process.env.GITLAB_SECRET
};

// checking if the required values are in the .env file
Object.keys(pre_validation_env).forEach((key) => {
  const isPublic: boolean = key.includes('next_public');
  if (
    !isPublic &&
    !!process.platform &&
    !pre_validation_env[key as keyof typeof pre_validation_env]
  )
    throw new Error(
      `@/lib/env/env.config.ts -> missing enviroment variable for ${key.toUpperCase()}`
    );
  else if (isPublic && !pre_validation_env[key as keyof typeof pre_validation_env])
    throw new Error(
      `@/lib/env/env.config.ts -> missing enviroment variable for ${key.toUpperCase()}`
    );
});

const _env = pre_validation_env as { [key in keyof typeof pre_validation_env]: string };

export { _env };
