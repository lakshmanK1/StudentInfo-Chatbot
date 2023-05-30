import React, { Suspense } from 'react'

const StudentInfo = React.lazy(()=>import('../../Components/Ui/StudentInfo/StudentInfo'));

function StudentPage() {
  return (
    <>
    <Suspense fallback={<center><h1>Loading...</h1></center>}>
    <StudentInfo/>
    </Suspense>
    </>
  )
}

export default StudentPage