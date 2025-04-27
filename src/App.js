import { Routes, Route, BrowserRouter } from "react-router-dom"
import Bar from './components/Bar/Bar'
import BlahgPage from './pages/BlahgPage/BlahgPage'
import HaikuPage from "./pages/HaikuPage/HaikuPage";
import FlipCard from "./pages/flipPage/FlipCard";
import { getCombinedData } from "./utils/data";
import { formatTime } from "./utils/helpers";
import Roth from "./pages/RothPage/RothPage";
import TossPage from "./pages/TossPage/TossPage"
import MapsPage from "./pages/MapsPage/MapsPage";

export default function App() {
    const events = getCombinedData()
    .map((item) => ({
      date: formatTime(item.AnticipatedCall),
      title: item.State,
      abortion: item.AbortionOnBallot,
      description: item.HouseNotes,
      details: item.SenateNotes,
      winner: item.WinnerTwenty,
      zone: item.Zone,
      time: new Date(`1970-01-01T${item.AnticipatedCall.slice(-11)}`).getTime(), // Parse time
      }))
      .sort((a, b) => {
        // First, sort by time
        if (a.time !== b.time) {
          return a.time - b.time;
        }
        // If times are equal, sort alphabetically by title (state name)
        return a.title.localeCompare(b.title);
      });
    return (
        <div className="main">
            <BrowserRouter>
                <Bar />
                <Routes>
                    <Route path='/' element={<FlipCard events={events}/>} />
                    <Route path='/assets' element={<Roth />} />
                    <Route path='/haikus' element={<HaikuPage />} />
                    <Route path='/blahg' element={<BlahgPage />} />
                    <Route path='/toss' element={<TossPage />} />
                    <Route path='/toss' element={<MapsPage />} />
                </Routes>
            </BrowserRouter>
</div>
    )
}