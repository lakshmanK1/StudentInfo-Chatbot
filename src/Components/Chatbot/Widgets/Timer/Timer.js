import React,{useEffect, useState} from 'react'
import './Timer.css'
import { useNavigate } from 'react-router-dom';

function Timer() {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        count > 0 && setInterval(() => setCount(count - 1), 2000);
        if(count === 0){
          return navigate('/studentpage');
        }
      }, [count]);

  return (
    <div className='timer-div'>
        <h1 className='timer-header'>Redirecting you Student Page!</h1>
        <h2 className='timer-count'>{count}</h2>
    </div>
  )
}

export default Timer