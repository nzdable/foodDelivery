import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'
import Update from './pages/Update/Update'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddIngredient from './pages/AddIngredient/AddIngredient'
import ListIngredients from './pages/ListIngredients/ListIngredients'
import UpdateIngredient from './pages/UpdateIngredient/UpdateIngredient'
import AddCustomer from './pages/CustomerCRUD/AddCustomer'
import ListCustomer from './pages/CustomerCRUD/ListCustomer'
import UpdateCustomer from './pages/CustomerCRUD/UpdateCustomer'


const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          {/* food */}
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/update/:id' element={<Update url={url}/>}/>  
          <Route path='/orders' element={<Orders url={url}/>}/>
          {/* ingredient */}
          <Route path='/addIngredient' element={<AddIngredient url={url}/>}/>
          <Route path='/listIngredients' element={<ListIngredients url={url}/>}/>
          <Route path='/updateIngredient/:id' element={<UpdateIngredient url={url}/>}/>

          <Route path='/addCustomer' element={<AddCustomer url={url}/>}/>
          <Route path='/listCustomer' element={<ListCustomer url={url}/>}/>
          <Route path='/updateCustomer/:id' element={<UpdateCustomer url={url}/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default App
