import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

interface IAppRouter {
  IsLogIn: any;
}

const AppRouter = ({ IsLogIn }: IAppRouter) => {
  return (
    <Router>
      <Routes>
        {IsLogIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};
export default AppRouter;
