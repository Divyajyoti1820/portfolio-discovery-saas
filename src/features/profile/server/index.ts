import { auth } from "@/lib/auth";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { prisma } from "@/lib/db";

import { ProfileSchema } from "@/features/profile/schema";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>().post(
  "/create",
  zValidator("json", ProfileSchema.omit({ userId: true })),
  async (c) => {
    const session = c.get("session");
    const user = c.get("user");

    if (!session) {
      return c.json({ error: "UnAuthorized Access" }, 401);
    }

    if (!user) {
      return c.json({ error: "UnAuthorized Access" }, 401);
    }

    const { name, email, image } = c.req.valid("json");

    const data = await prisma.profile.create({
      data: {
        name: name,
        email: email,
        image: image ? image : "",
        userId: user.id,
      },
    });

    if (!data) {
      return c.json(
        { error: "[PROFILE_ERROR] : Failed to create profile" },
        400
      );
    }

    return c.json({ data });
  }
);

export default app;
