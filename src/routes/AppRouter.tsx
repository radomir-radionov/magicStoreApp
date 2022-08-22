import { Routes, Route } from "react-router-dom";
import pageRoutes from "constants/pageRoutes";
import {
  LayoutPage,
  HomePage,
  ProductPage,
  NotFoundPage,
  AboutPage,
  ProtectedPage,
  CartPage,
  LayoutProfilePage,
} from "pages";
import { AdminPanel, EditProfilePanel, ProfileInfo } from "modules";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={pageRoutes.HOME} element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route element={<ProtectedPage />}>
          <Route path={pageRoutes.PROFILE} element={<LayoutProfilePage />}>
            <Route index element={<ProfileInfo />} />
            <Route
              path={pageRoutes.EDIT_PANEL}
              element={<EditProfilePanel />}
            />
            <Route path={pageRoutes.ADMIN_PANEL} element={<AdminPanel />} />
            <Route path={pageRoutes.CART} element={<CartPage />} />
          </Route>
          <Route path={pageRoutes.PRODUCT} element={<ProductPage />} />
        </Route>
        <Route path={pageRoutes.ABOUT} element={<AboutPage />} />
        <Route path={pageRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
