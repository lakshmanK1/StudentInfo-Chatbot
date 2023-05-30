import React, { Suspense } from 'react'

const NotFound = React.lazy(()=>import('../../Components/Ui/NotFound/NotFound'));

function NotFoundPage() {
  return (
    <>
    <Suspense fallback={<center><h1>Loading...</h1></center>}>
    <NotFound/>
    </Suspense>
    </>
  )
}

export default NotFoundPage