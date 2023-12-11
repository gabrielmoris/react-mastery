import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import { CategoriesPreview } from "../../routes/categories-preview/categories-preview.component";
import { Category } from "../../routes/category/catgory.component";
import { useEffect } from "react";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
