import { Navigation } from "./_components/navigation";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <main className="min-h-screen w-full md:max-w-6xl mx-auto flex flex-col items-start bg-background text-foreground">
      <section className="w-full h-[4.625rem] lg:h-[7.875rem] p-0 lg:p-6 bg-transparent">
        <Navigation />
      </section>
      <section className="w-full flex-1 p-4 md:p-6 bg-transparent bg-slate-600">
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
