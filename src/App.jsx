import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
    </main>

  )
}

export default App