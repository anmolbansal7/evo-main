import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Mission from './pages/Mission';
import Challenges from './pages/Challenges';
import Solutions from './pages/Solutions';
import Features from './pages/Features';
import Contact from './pages/Contact';

import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <SmoothScroll>
                <Landing></Landing>
                <Mission></Mission>
                <Challenges></Challenges>
                <Solutions></Solutions>
                <Features></Features>
                <Contact></Contact>
            </SmoothScroll>
        </div>
        
           
    )
}

export default App;