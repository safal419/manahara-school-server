import path from "path";

export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  const client = env("DATABASE_CLIENT", "postgres");

  const connections: Record<string, any> = {
    postgres: {
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env("DATABASE_SSL", true) && {
          rejectUnauthorized: env("DATABASE_SSL_REJECT_UNAUTHORIZED", false),
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: env("DATABASE_POOL_MIN", 2),
        max: env("DATABASE_POOL_MAX", 10),
      },
    },

    sqlite: {
      connection: {
        filename: path.join(__dirname, "..", env("DATABASE_FILENAME", ".tmp/data.db")),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
