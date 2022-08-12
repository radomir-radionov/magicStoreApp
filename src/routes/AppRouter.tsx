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
  AdminPage,
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
            <Route path={pageRoutes.USER_INFO} element={<ProfileInfo />} />
            <Route
              path={pageRoutes.EDIT_PANEL}
              element={<EditProfilePanel />}
            />
            <Route path={pageRoutes.ADMIN_PANEL} element={<AdminPanel />} />
            <Route path={pageRoutes.CART} element={<CartPage />} />
          </Route>
          <Route path={pageRoutes.PRODUCT} element={<ProductPage />} />
          <Route path={pageRoutes.ADMIN} element={<AdminPage />} />
        </Route>
        <Route path={pageRoutes.ABOUT} element={<AboutPage />} />
      </Route>
      <Route path={pageRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
