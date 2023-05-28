import React, { Suspense } from 'react'

const Welcome = React.lazy(()=>import('../../Components/Ui/Welcome/Welcome'));

function Home() {
  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Welcome/>
    </Suspense>
    </>
  )
}

export default Home