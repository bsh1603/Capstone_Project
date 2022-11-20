import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
    return (
        <>
            <h3>안녕하세요. 메인페이지 입니다.</h3>
            <ul>
                <Link to="/room/1"><li>1번 채팅방</li></Link>
                <Link to="/room/2"><li>2번 채팅방</li></Link>
                <Link to="/room/3"><li>3번 채팅방</li></Link>
            </ul>
        </>
    );
};

export default Main;