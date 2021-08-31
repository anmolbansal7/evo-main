import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Mission from './pages/Mission';
import Challenges from './pages/Challenges';
import Solutions from './pages/Solutions';
import Features from './pages/Features';
import Contact from './pages/Contact';
import NavbarResp from './components/NavbarResp';


function App(){
    return(
        <div>
            <Navbar></Navbar>
            <NavbarResp></NavbarResp>
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