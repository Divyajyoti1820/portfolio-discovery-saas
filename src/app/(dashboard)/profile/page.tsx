import ProtectServer from "@/lib/protect-server";

import { ProfilePageClient } from "./client";

const Profile = async () => {
  await ProtectServer();

  return <ProfilePageClient />;
};

export default Profile;
