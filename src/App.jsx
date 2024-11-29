
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'

function App() {

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
<Route>
<Route path='/' element ={<Home/>}/>
</Route>
    )
  )

  return (
    <>
<RouterProvider router={myRoute}/>
    </>

  )
}

export default App
