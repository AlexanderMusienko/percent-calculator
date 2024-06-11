import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PercentCalc } from "./domains/calculator/pages/percent-calc";
import { PageLayout } from "./shared/layout/PageLayout";
import { ThemeContext } from "./common/contexts/theme.context";
import { useContext } from "react";
import { NUIThemeWrapper } from "./shared/components/NextUIThemeWrapper";
import "./index.css";

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
    </NUIThemeWrapper>
  );
}

export default App;
