interface Props {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <div className="max-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthenticationLayout;
