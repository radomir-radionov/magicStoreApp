import pageRoutes from "constants/pageRoutes";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import userSelector from "redux/user/selectors";

const ProtectedScreen = () => {
  const isAuth = useSelector(userSelector.isAuth);

  return isAuth ? <Outlet /> : <Navigate to={pageRoutes.HOME} />;
};

export default ProtectedScreen;
