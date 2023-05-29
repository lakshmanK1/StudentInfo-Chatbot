import React from 'react'
import './StudentInfo.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function StudentInfo() {
    const student = useSelector(state => state.studentStore.studentData);
  return (
    <main className='stuInfo-main'>
        <p className='stuInfo-greet'>Congratulations! successfully added to student system</p>
        <div className='stuInfo-div'>
            <h1 className='stuInfo-name'>Name : {student.name}</h1>
            <p className='stuInfo-age'>Age : {student.age} years</p>
        </div>
        <Link to='/'><button className='stuInfo-btn'>Home</button></Link>   
    </main>
  )
}

export default StudentInfo