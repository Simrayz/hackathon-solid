import { serverSchema } from "~/env/schema";
import { formatErrors } from "~/env/formatErrors";

const env = serverSchema.safeParse(process.env);

if (!env.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(env.error.format())
  );
  throw new Error("Invalid environment variables");
}

export const serverEnv = env.data;
