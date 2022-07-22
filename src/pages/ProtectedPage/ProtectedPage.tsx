import pageRoutes from "constants/pageRoutes";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsAuthSelector } from "redux/user/selectors";

const ProtectedPage = () => {
  const isAuth = useSelector(getIsAuthSelector);

  return isAuth ? <Outlet /> : <Navigate to={pageRoutes.HOME} />;
};

export default ProtectedPage;
