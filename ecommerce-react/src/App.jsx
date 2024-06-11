import './App.css'
import ItemDetail from './components/itemDetailContainer/itemdetailcontainer'
import ItemListContainer from './components/itemListContainer/itemlistcontainer'
import Menu from './components/menu/menu'
import {BrowserRouter, Routes, Route} from "react-router-dom"
 
function App() {

  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<ItemListContainer/> }/>
        <Route path='/category/:idCategory' element={<ItemListContainer/> }/>
        <Route path='/itemdetail' element={<ItemDetail/> }/>
      </Routes>
      
    </BrowserRouter>
    </>
    
  )
}

export default App
