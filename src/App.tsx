import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layouts/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
