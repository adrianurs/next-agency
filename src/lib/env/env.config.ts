const pre_validation_env = {
  mongo_url: process.env.MONGO_URL
};

// checking if the required values are in the .env file
// **Attention** check works only for values used on server side
Object.keys(pre_validation_env).forEach((key) => {
  if (!!process.platform && !pre_validation_env[key as keyof typeof pre_validation_env])
    throw new Error(`@/lib/env/env.config.ts -> missing enviroment key for ${key.toUpperCase()}`);
});

const _env = pre_validation_env as { [key in keyof typeof pre_validation_env]: string };

export { _env };
