import './App.css';
import Blahg from './components/Blahg/Blahg'
import ImageGallery from './components/Blahg/ImagGallery'
export default function App() {
    return (
        <>
            <div style={{ width: '100%', alignContent: 'center', alignItems: 'center' }}>
            <ImageGallery />
                <Blahg />
                
            </div>
        </>
    )
}