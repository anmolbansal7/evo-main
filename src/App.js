import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Mission from './pages/Mission';
import Challenges from './pages/Challenges';
import Solutions from './pages/Solutions';
import Features from './pages/Features';
import Contact from './pages/Contact';

function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Landing></Landing>
        <Mission></Mission>
        <Challenges></Challenges>
        <Solutions></Solutions>
        <Features></Features>
        <Contact></Contact>
        </div>
    )
}

export default App;