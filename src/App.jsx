import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider as ReduxProvidor } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "constants/routeNames";

function App() {
  return (
    <ReduxProvidor store={store}>
      <Router>
        <Routes>
          <Route path={ROUTE_NAMES.HOME} element={<></>} />
        </Routes>
      </Router>
    </ReduxProvidor>
  );
}

export default App;
