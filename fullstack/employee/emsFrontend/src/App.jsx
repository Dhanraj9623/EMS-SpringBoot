import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* //http://localhost:3000 */}
        <Route path='/' element={<ListEmployeeComponent/>}> </Route>
        {/* //http://localhost:3000 */}
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
        {/* //http://localhost:3000/add-employee */}
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
        {/* //http://localhost:3000/edit-employee/1 */}
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
        {/* //http://localhost:8080/departments */}
        <Route path='/departments' element ={<ListDepartmentComponent/>}></Route>
      </Routes>
      
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
