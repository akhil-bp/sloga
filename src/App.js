import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
};

export default App;
