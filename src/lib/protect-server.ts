import "server-only";

import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ProtectServer = async () => {
  const response = await auth.api.getSession({
    headers: await headers(),
  });

  if (!response || !response.session) {
    redirect("/login");
  }

  return {
    user: {
      id: response.user.id,
      name: response.user.name,
      email: response.user.email,
    },
  };
};

export default ProtectServer;
