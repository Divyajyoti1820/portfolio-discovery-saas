interface Props {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-t from-indigo-600 to-purple-600">
      {children}
    </div>
  );
};

export default AuthenticationLayout;
