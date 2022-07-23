import pageRoutes from "constants/pageRoutes";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthSelector } from "redux/user/selectors";

const ProtectedPage = () => {
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? <Outlet /> : <Navigate to={pageRoutes.HOME} />;
};

export default ProtectedPage;
