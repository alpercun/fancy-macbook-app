import { useEffect } from "react";
import { useRef } from "react";
import Typed from "typed.js";
import { MagicalBorders } from "../MagicalBorders";

const Terminal = () => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'brew install --cask fig alfred displaperture',
        'brew install --cask fig discord',
        'brew install --cask fig slack figma'
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])
  return (
    <MagicalBorders>
      <div className="terminal">
        <div className="terminal-inner magical-borders-inner">
          <div className="terminal-header">
            <div className="terminal-header-action-buttons">
              <div className="red" />
              <div className="yellow" />
              <div className="green" />
            </div>
            <div className="terminal-header-window">custom-macbook-apps ⌘1</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-body-content">
              <div className="home">{`>`}</div>
              <div className="wrap">

                <div className="type-wrap">
                  <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MagicalBorders>
  )
}

export { Terminal }