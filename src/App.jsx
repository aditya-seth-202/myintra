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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvidor store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<></>} />
          </Routes>
          <Footer/>
        </Router>
      </ReduxProvidor>
    </ThemeProvider>
  );
}

export default App;
