import DirectoryItem from "../directory-item/directory-item.component.jsx";
import "./directory.styles.scss";
import { categories } from "../../static-data/categories.js";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
