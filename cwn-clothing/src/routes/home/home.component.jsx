import Directory from "../../components/directory/directory.component.jsx";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
