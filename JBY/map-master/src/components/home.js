import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    return (
        <div className='container'>
            <div className='nav'>
                <h1>JIBMBE</h1>
                <Link to='/signup' style={{textDecoration: 'none'}}>
                    <h2>Create account</h2>
                </Link>
            </div>
            <div className='home'>
                <h3>Explore Maps</h3>
                <p>Your virtual guide to everywhere.</p>
            </div>
            <div className='footer'>
                @2023, jibmbe - All rights reserved
            </div>
        </div>
    )
}