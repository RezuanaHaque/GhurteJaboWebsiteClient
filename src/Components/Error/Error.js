import React from 'react';

const Error = () => {
    return (
        // 404 route 
        <div> 
            <div className=" p-5 mx-auto align-self-center justify-content-center">
                <img width="400px" height="300px" className="  mx-auto d-block" src="https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png" alt="" />
                <h1 className="text-center">THIS PAGE CANNOT BE FOUND</h1>
                <p className="text-center">We are really sorry, but page you requested is missing :( Perhaps searching again can help.</p>
            </div>
        </div>
    );
};

export default Error;