import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Bar from './components/Bar/Bar'
import BlahgPage from './components/BlahgPage/BlahgPage'
import HaikuPage from "./components/HaikuPage/HaikuPage";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
    return (
        <>
        <BrowserRouter>
        <Bar/>
        <Routes>
      
            <Route path='/haikus' element={<HaikuPage />} />
            <Route path='/blahg' element={<BlahgPage />} style={{ width: '100%', alignContent: 'center', alignItems: 'center' }}/>


        </Routes>
        </BrowserRouter>
            {/* <div style={{ width: '100%', alignContent: 'center', alignItems: 'center' }}>   </div> */}

          
                
         
        </>
    )
}