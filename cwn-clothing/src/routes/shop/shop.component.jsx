import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import { CategoriesPreview } from "../../routes/categories-preview/categories-preview.component";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
}
