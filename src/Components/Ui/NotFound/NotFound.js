import React from 'react'
import './NotFound.css';
import {BiError} from 'react-icons/bi'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className='notfound-main'>
        <div className='notfound-div'>
            <BiError className='error-icon'/>
            <h1 className='notfound-header'>404 Error</h1>
            <p className='notfound-descrip'>Sorry, the page you are lokking for is not found</p>
            <Link to='/'><button className='notfound-btn'>Back to Home</button></Link>
        </div>
    </main>
  )
}

export default NotFound