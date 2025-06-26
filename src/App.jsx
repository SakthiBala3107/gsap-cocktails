import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <div className="h-dvh bg-black"></div>
    </main>

  )
}

export default App