import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard';
import Newsitem from './Components/Newsitem';
const App = () => {
  const[cat,setCat]=useState("general");
  return (
    <div>
      <Navbar setcat={setCat}/>
      <NewsBoard cat={cat}/>
      <Newsitem/>
    </div>
  )
}

export default App