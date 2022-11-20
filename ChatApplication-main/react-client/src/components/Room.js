import React from 'react';
import { useParams } from "react-router-dom";

const Product = (props) => {
    const { roomId } = useParams();

    return (
        <>
            <h3>{roomId} 방 페이지입니다.</h3>
        </>
    );
}

export default Product;
