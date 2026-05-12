import {gsap} from "gsap/gsap-core";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className="h-dvh bg-black"/>
        </main>
    )
}
export default App
