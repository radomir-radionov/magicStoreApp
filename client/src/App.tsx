import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { userActions } from "redux/user";
import {
  isDataChangedOnServerSelector,
  userIdSelector,
} from "redux/user/selectors";
import AppRouter from "routes/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainerStyled } from "styles/globalStyles";

function App() {
  const dispatch = useDispatch();
  const id = useSelector(userIdSelector);
  const isDataChangedOnServer = useSelector(isDataChangedOnServerSelector);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userActions.checkAuth());
      id &&
        dispatch(userActions.getUserData(id)) &&
        dispatch(userActions.isDataChangedOnServer(false));
    }
  }, [dispatch, id, isDataChangedOnServer]);

  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainerStyled autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
