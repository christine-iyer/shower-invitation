import { Routes, Route, BrowserRouter } from "react-router-dom"
import Bar from './components/Bar/Bar'
import BlahgPage from './pages/BlahgPage/BlahgPage'
import HaikuPage from "./pages/HaikuPage/HaikuPage";
import FlipCard from "./pages/flipPage/FlipCard";
import Roth from "./pages/RothPage/RothPage";
import TossPage from "./pages/TossPage/TossPage"

export default function App() {
    return (
        <div className="main">
            <BrowserRouter>
                <Bar />
                <Routes>
                    <Route path='/' element={<FlipCard />} />
                    <Route path='/assets' element={<Roth />} />
                    <Route path='/haikus' element={<HaikuPage />} />
                    <Route path='/blahg' element={<BlahgPage />} />
                </Routes>
            </BrowserRouter>
</div>
    )
}