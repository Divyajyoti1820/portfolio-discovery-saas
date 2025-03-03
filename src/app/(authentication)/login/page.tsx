import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { LoginCard } from "@/features/authentication/components/login-card";

const LoginPage = async () => {
  const response = await auth.api.getSession({
    headers: await headers(),
  });

  if (response?.session) return redirect("/");

  return <LoginCard />;
};

export default LoginPage;
