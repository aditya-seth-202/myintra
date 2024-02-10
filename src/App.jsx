import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider as ReduxProvidor } from "react-redux";
import store from "./redux/store/store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./configs/mui";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./constants/routeNames";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home/Home";
import ProductListing from "./routes/ProductListing/ProductListing";
import Login from "./routes/Login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvidor store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<Home />} />
            <Route
              path={ROUTE_NAMES.PRODUCT_LISTING}
              element={<ProductListing />}
            />
            <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </ReduxProvidor>
    </ThemeProvider>
  );
}

export default App;
