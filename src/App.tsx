import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { PercentCalc } from "./domains/calculator/pages/percent-calc";
import { PageLayout } from "./shared/layout/PageLayout";
import { useContext } from "react";
import { NUIThemeWrapper } from "./shared/components/NextUIThemeWrapper";
import { Flip, ToastContainer } from "react-toastify";
import { ThemeContext } from "./common/contexts/theme.context";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { themeMode } = useContext(ThemeContext);

  return (
    <>
      <HashRouter>
        {/* @TODO: normal router */}
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<PercentCalc />} />
          </Route>
        </Routes>
      </HashRouter>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme={themeMode}
        transition={Flip}
      />
    </>
  );
}

export default App;
