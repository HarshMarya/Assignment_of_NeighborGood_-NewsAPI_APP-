import { useState } from 'react'
import './index.css'
import Navbar from './Component/Navbar'
import NewsBoard from './Component/NewsBoard'
import Nav from './Component/Nav'
import PaginationButtons from './Component/PaginationButtons'

function App() {
  const [category, setCategory] = useState("general")

  return (
    <div>
    {/* <Navbar setCategory={setCategory}/> */}
    <Nav setCategory={setCategory}/>
    <NewsBoard category={category}/>
    <PaginationButtons/>
    {/* <Nav/> */}
    </div>
  )
}

export default App
