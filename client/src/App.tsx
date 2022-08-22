import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { cartActions } from "redux/cart";
import { userActions } from "redux/user";
import {
  currentUserDataSelector,
  isDataChangedOnServerSelector,
} from "redux/user/selectors";
import AppRouter from "routes/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainerStyled } from "styles/globalStyles";

function App() {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);
  const isDataChangedOnServer = useSelector(isDataChangedOnServerSelector);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userActions.getUserData());
    }
  }, [dispatch]);

  useEffect(() => {
    id &&
      dispatch(cartActions.getUserCartGames({ id })) &&
      dispatch(userActions.isDataChangedOnServer(false));
  }, [dispatch, id, isDataChangedOnServer]);

  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainerStyled autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
