import { categories } from "../../static-data/categories.js";
import Directory from "../../components/directory/directory.component.jsx";

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
