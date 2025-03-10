import { Navigation } from "./_components/navigation";
import { Phone } from "./_components/phone";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <main className="min-h-screen w-full md:max-w-7xl mx-auto flex flex-col items-start bg-background text-foreground">
      <section className="w-full h-[4.625rem] lg:h-[7.875rem] p-0 lg:p-6 bg-transparent">
        <Navigation />
      </section>
      <section className="w-full h-[calc(100vh-4.625rem)] lg:h-[calc(100vh-7.875rem)] flex flex-row items-center justify-start gap-x-6 p-4 md:px-6 md:pb-6 pt-6 xl:pt-0 bg-slate-600">
        <div className="bg-white h-full hidden xl:w-[31.625rem] xl:flex items-center justify-center p-6 rounded-lg overflow-hidden">
          <Phone />
        </div>
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
