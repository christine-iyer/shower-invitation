import { Routes, Route, BrowserRouter } from "react-router-dom"
// import './App.css';
import Bar from './components/Bar/Bar'
import BlahgPage from './pages/BlahgPage/BlahgPage'
import HaikuPage from "./pages/HaikuPage/HaikuPage";
import FlipCard from "./pages/flipPage/FlipCard";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function App() {
    return (
        <div className="main">
        <BrowserRouter>
        <Bar />
        <Routes>

         <Route path='/' element={<FlipCard  />} /> 
            <Route path='/haikus' element={<HaikuPage />} />
            
            <Route path='/blahg' element={<BlahgPage />} style={{ display:"grid", width: '100%', alignContent: 'center', alignItems: 'center' }}/>


        </Routes>
        </BrowserRouter>
            {/* <div style={{ width: '100%', alignContent: 'center', alignItems: 'center' }}>   </div> */}

          
                
         
        </div>
    )
}