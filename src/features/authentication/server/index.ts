import { Hono } from "hono";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

import { zValidator } from "@hono/zod-validator";
import { ProfileSchema } from "../schema";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>()
  .get("/profile", async (c) => {
    const session = c.get("session");
    if (!session)
      return c.json(
        {
          error: "Unauthorized Access",
        },
        401
      );

    const user = c.get("user");
    if (!user) {
      return c.json({ error: "Unauthorized Access" }, 401);
    }

    const data = await prisma.user.findUnique({ where: { id: user.id } });

    if (!data) {
      return c.json(
        { error: "[Profile] : Failed to fetch profile error" },
        404
      );
    }

    return c.json({
      data: data,
    });
  })
  .patch(
    "/profile/update",
    zValidator("json", ProfileSchema.omit({ email: true })),
    async (c) => {
      const session = c.get("session");
      if (!session)
        return c.json(
          {
            error: "Unauthorized Access",
          },
          401
        );

      const user = c.get("user");
      if (!user) {
        return c.json({ error: "Unauthorized Access" }, 401);
      }

      const { name, image } = c.req.valid("json");

      const data = await prisma.user.update({
        where: { id: user.id },
        data: {
          name,
          image: image ? image : null,
        },
      });

      if (!data) {
        return c.json(
          {
            error: "[Profile] : Failed to update profile error",
          },
          404
        );
      }

      return c.json({
        data: data.id,
      });
    }
  );

export default app;
