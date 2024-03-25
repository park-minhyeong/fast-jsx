import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
      </Routes>
    </BrowserRouter>
  );
}
