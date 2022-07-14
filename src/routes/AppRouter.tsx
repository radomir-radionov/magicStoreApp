import {
  LayoutPage,
  HomePage,
  UserPage,
  ProductPage,
  NotFoundPage,
  AboutPage,
} from "pages";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
