import { Hono } from "hono";

const app = new Hono().post("/", (c) => {
  return c.json({
    message: "Hello",
  });
});

export default app;
