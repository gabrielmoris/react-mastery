import "./category.styles.scss";
import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { CategoriesContext } from "../../context/categories.context";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import { Spinner } from "../../components/spinner/spinner.component";

export const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">{products && products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      )}
    </>
  );
};
