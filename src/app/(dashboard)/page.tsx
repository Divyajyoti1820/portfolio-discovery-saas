import ProtectServer from "@/lib/protect-server";
import { DashboardPageClient } from "./client";

const Home = async () => {
  await ProtectServer();

  return <DashboardPageClient />;
};

export default Home;
