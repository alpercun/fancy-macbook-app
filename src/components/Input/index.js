import React, { useEffect, useState } from 'react'
import { ReactComponent as Copy } from '../../assets/svg/copy.svg'

const Input = ({ getData, isOpen }) => {
  let result = ["brew install --cask"];

  useEffect(() => {
    console.log('isOpen', isOpen);
  }, [isOpen]);

  const [showTooltip, setShowTooltip] = useState(false);

  const formatData = (data) => {
    data.forEach(item => {
      result.push(item.name);
    })
  }
  formatData(getData)

  const copyToClipboard = () => {
    if (result.length === 1) return;
    navigator.clipboard.writeText(result.join(' '));
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  }

  const isAdded = () => {
    if (result.length === 1) return false;

    return true;
  }

  return (
    <div className={`input ${isOpen ? 'open' : 'close'}`}>
      {isOpen ? <div className="input-content">
        {result.join(' ')}
      </div> : null}
      <div
        onClick={copyToClipboard}
        className={`copy ${isAdded() ? 'active' : 'disabled'}`}
      >
        <Copy />
        <div className={`tooltip ${showTooltip ? 'active' : `disabled`}`}>
          Copied
        </div>
      </div>
    </div >
  )
}

export { Input }