import React, { Suspense } from 'react'

const Bot = React.lazy(()=>import('../../Components/Chatbot/Bot'));

function StudentBot() {
  return (
    <>
    <Suspense fallback={<center><h1>Loading...</h1></center>}>
    <Bot/>
    </Suspense>
    </>
  )
}

export default StudentBot