import { useState } from "react";
import { ReactComponent as ArrowUp } from "../../assets/svg/arrow-up.svg";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      className="scroll-to-top"
      onClick={ScrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <ArrowUp />
    </div>
  )
}

export { ScrollToTop }