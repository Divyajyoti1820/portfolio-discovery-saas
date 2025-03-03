import { Hono } from "hono";

const app = new Hono().post("/create", async (c) => {
  return c.json({
    success: true,
  });
});

export default app;
