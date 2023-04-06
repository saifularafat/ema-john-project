import React from 'react';
import { Navigate } from 'react-router-dom';

const Error = () => {
    // const navigate = Navigate();
    // const handlerGoBack = () => {
    //     navigate ( -1 )
    // };
    return (
        <div style={{textAlign: 'center', fontSize: '20px',justifyContent: 'center', alignItems:'center', marginTop:'20%'}}>
            <p>404 <span style={{fontSize: '28px', color: 'orange'}}>|</span> <span>Nothing here to see.!</span></p>
            {/* <button onClick={handlerGoBack}>Go Back</button> */}
        </div>
    );
};

export default Error;