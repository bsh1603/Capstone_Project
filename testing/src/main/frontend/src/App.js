import { Route, Routes } from "react-router-dom";

import ChatSetting from "./pages/ChatSetting";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Member from "./pages/Member";
import Profile from "./pages/Profile";
import RegisterManager from "./pages/RegisterManager";
import RegisterWorker from "./pages/RegisterWorker";
import Stock from "./pages/Stock";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>루트페이지</div>} />
        <Route path="/main" element={<Main />} />
        <Route path="/registermanager" element={<RegisterManager />} />
        <Route path="/registerworker" element={<RegisterWorker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/work" element={<Work />} />
        <Route path="member" element={<Member />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/chatsetting" element={<ChatSetting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
