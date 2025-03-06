import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import GF from "./pages/Giovanna";
import JP from "./pages/Julia";
import KB from "./pages/Kamilly";
import MD from "./pages/Duarte";
import AP from "./pages/AP";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AP />} />
          <Route path="/GF" element={<GF />} />
          <Route path="/JP" element={<JP />} />
          <Route path="/KB" element={<KB />} />
          <Route path="/MD" element={<MD />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
