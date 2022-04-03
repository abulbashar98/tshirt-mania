import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import GrandPa from './components/GrandPa/GrandPa';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/orderreview' element={<OrderReview />}></Route>
        <Route path='/grandpa' element={<GrandPa />}></Route>
      </Routes >
    </div >
  );
}

export default App;
