import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { background: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
    // backgroundFilter: "blur(10px)",
        duration: 1,
        ease:'power1.inOut'
      }
    );
  }, []);

  // RENDERING-STUFFS
  return (
    <nav>
      <a href="#home" className="flex items-center gap-2">
        <img src="public/images/logo.png" alt="" />
        <p>Velvet Pour</p>
      </a>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
