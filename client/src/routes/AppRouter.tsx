import { Routes, Route } from "react-router-dom";
import pageRoutes from "constants/pageRoutes";
import {
  Home,
  Product,
  NotFound,
  About,
  Protected,
  Cart,
  Profile,
  Layout,
} from "screens";
import { AdminPanel, Info, Settings } from "modules";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={pageRoutes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<Protected />}>
          <Route path={pageRoutes.PROFILE} element={<Profile />}>
            <Route index element={<Info />} />
            <Route path={pageRoutes.SETTINGS} element={<Settings />} />
            <Route path={pageRoutes.CART} element={<Cart />} />
            <Route path={pageRoutes.ADMIN_PANEL} element={<AdminPanel />} />
          </Route>
          <Route path={pageRoutes.PRODUCT} element={<Product />} />
        </Route>
        <Route path={pageRoutes.ABOUT} element={<About />} />
        <Route path={pageRoutes.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
