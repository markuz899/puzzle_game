import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoot({ children }: any) {
  let location = useLocation();
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
