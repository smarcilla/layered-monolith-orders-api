import { buildApp } from "./main";

describe("GET /health", () => {
  it("returns 200 ok", async () => {
    const app = buildApp();
    const res = await app.inject({ method: "GET", url: "/health" });
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/application\/json/);
    expect(res.json()).toEqual({ status: "ok" });
  });
});
