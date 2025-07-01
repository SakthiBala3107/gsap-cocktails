import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import { useEffect } from "react"
import Contacts from "./components/Contacts"

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {



  
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contacts/>
    </main>

  )
}

export default App