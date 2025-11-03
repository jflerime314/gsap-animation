import { Routes, Route } from "react-router";

import Test from "./pages/Test/Test";
import Hibou from "./pages/Hibou";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/hibou" element={<Hibou />} />
    </Routes>
  );
};

export default App;
