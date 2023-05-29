import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import StudentBot from './Pages/StudentBot/StudentBot';
import StudentPage from './Pages/StudentPage/StudentPage';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='enrollbot' element={<StudentBot/>}/>
      <Route path='studentpage' element={<StudentPage/>}/>
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
