import React from 'react'
import './GotItBtn.css'

function GotItBtn(props) {

  const onClkFunc = () => {
    props.actionProvider.handleUserMsg();
    setTimeout(()=>{
      props.actionProvider.handleStart();
    },1000);
  }

  return (
    <div>
        <button className='ini-btn' onClick={()=>onClkFunc()}>Got it</button>
    </div>
  )
}

export default GotItBtn