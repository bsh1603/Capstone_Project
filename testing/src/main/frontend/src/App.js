import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RegisterManager from "./pages/RegisterManager";
import RegisterWorker from "./pages/RegisterWorker";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>루트페이지</div>} />
        <Route path="/registermanager" element={<RegisterManager />} />
        <Route path="/registerworker" element={<RegisterWorker />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
