import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PercentCalc } from "./domains/calculator/pages/percent-calc";
import { PageLayout } from "./shared/layout/PageLayout";
import { ThemeContext } from "./common/contexts/theme.context";
import { useContext } from "react";
import { NUIThemeWrapper } from "./shared/components/NextUIThemeWrapper";
import { Bounce, Flip, Slide, ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { themeMode } = useContext(ThemeContext);

  return (
    <NUIThemeWrapper themeMode={themeMode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<PercentCalc />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
    </NUIThemeWrapper>
  );
}

export default App;
