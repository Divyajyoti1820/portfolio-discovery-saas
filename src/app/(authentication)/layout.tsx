interface Props {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center auth-gradient">
      {children}
    </section>
  );
};

export default AuthenticationLayout;
