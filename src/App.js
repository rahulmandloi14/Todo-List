// import logo from './logo.svg';
// import './App.css';
import NewTodo from './component/NewTodo';
import { Route, Routes } from 'react-router';
import About from './component/About';
import Contact from './component/Contact';



function App() {
  return (
    <div >
    <Routes>
    <Route path="/" element={<NewTodo/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>


 {/* <NewTodo/> */}
    </div>
  );
}

export default App;
