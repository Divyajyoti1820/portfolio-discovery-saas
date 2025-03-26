interface Props {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-pink-300">
      {children}
    </div>
  );
};

export default AuthenticationLayout;
