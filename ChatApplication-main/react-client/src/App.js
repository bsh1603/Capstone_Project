import React from 'react'
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import ChatRoom from './components/ChatRoom'
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import Room from "./components/Room";
import Server from "./components/Server";

const App = () => {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/room/:roomId" element={<ChatRoom />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="/server" element={<Server />}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;

