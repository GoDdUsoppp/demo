import {gsap} from "gsap/gsap-core";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Components/Navbar.jsx";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <main>
            <Navbar />
        </main>
    )
}
export default App
