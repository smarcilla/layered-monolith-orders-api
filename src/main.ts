import Fastify from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

export function buildApp() {
  const app = Fastify().withTypeProvider<ZodTypeProvider>();
  app.get("/health", () => ({ status: "ok" }));
  return app;
}

if (process.env.NODE_ENV !== "test") {
  const app = buildApp();
  const port = Number(process.env.PORT ?? 3000);
  app
    .listen({ port, host: "0.0.0.0" })
    .then(() => console.log(`[http] listening on :${port}`))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
