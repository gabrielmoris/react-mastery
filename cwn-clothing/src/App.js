import { categories } from "./static-data/categories";
import Directory from "./components/directory/directory.component";

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
