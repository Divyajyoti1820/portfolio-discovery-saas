import { auth } from "@/lib/auth";
import { Hono } from "hono";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>().get("/profile", async (c) => {
  return c.json({
    message: "Hello World",
  });
});

export default app;
