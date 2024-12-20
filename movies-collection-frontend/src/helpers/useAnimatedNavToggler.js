import { useState } from "react";
import { useAnimation, useCycle } from "framer-motion";


export default function useAnimatedNavToggler() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [y, cycleY] = useCycle("0", "-150%");
  const animation = useAnimation();

  const toggleNavbar = () => {
    setShowNavLinks(!showNavLinks);
    animation.start({ y: y, display: "block" });
    cycleY();
  };

  return {showNavLinks,animation, toggleNavbar }
}
