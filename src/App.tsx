import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { userActions } from "redux/user";
import {
  currentUserDataSelector,
  isDataChangedOnServerSelector,
} from "redux/user/selectors";

import AppRouter from "routes/AppRouter";

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
    dispatch(userActions.getUserCartGames({ id }));
    dispatch(userActions.setDataChangedOnServer(false));
  }, [dispatch, id, isDataChangedOnServer]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
