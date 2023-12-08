import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import { CategoriesPreview } from "../../routes/categories-preview/categories-preview.component";
import { Category } from "../../routes/category/catgory.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    // the best way to call an async function in a useEffect is to actually create a async function inside
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
