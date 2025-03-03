import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { RegisterCard } from "@/features/authentication/components/register-card";

const Register = async () => {
  const response = await auth.api.getSession({
    headers: await headers(),
  });

  if (response?.session) return redirect("/");

  return <RegisterCard />;
};

export default Register;
