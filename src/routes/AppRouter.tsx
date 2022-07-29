import { Routes, Route } from "react-router-dom";
import pageRoutes from "constants/pageRoutes";
import {
  LayoutPage,
  HomePage,
  UserPage,
  ProductPage,
  NotFoundPage,
  AboutPage,
  ProtectedPage,
  CartPage,
} from "pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={pageRoutes.HOME} element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route element={<ProtectedPage />}>
          <Route path={pageRoutes.USER} element={<UserPage />} />
          <Route path={pageRoutes.PRODUCT} element={<ProductPage />} />
          <Route path={pageRoutes.CART} element={<AboutPage />} />
          <Route path={pageRoutes.ABOUT} element={<CartPage />} />
        </Route>
      </Route>
      <Route path={pageRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
