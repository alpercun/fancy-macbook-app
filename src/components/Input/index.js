import React, { useState } from 'react'
import { ReactComponent as Copy } from '../../assets/svg/copy.svg'

import { AppNameList } from '../AppNameList';

const Input = ({ getData, isOpen, removeFromInput }) => {
  let result = ["brew install --cask"];

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
    <div className={`input item ${isOpen && isAdded() ? 'sidebar-expand' : isOpen ? 'open' : `close ${!isAdded() && 'disabled'}`}`}>
      {isOpen && <div className="input-content">
        <AppNameList getData={getData} removeFromInput={removeFromInput} />
      </div>}
      <div
        onClick={copyToClipboard}
        className={`copy ${!isOpen && isAdded() ? 'background-disabled' : isAdded() ? 'active' : 'disabled'}`}
      >
        {result.length >= 2 && !isOpen && <div className="app-count">
          {result.length - 1}
        </div>}
        {isOpen && 'Copy to clipboard'}
        <Copy />
        <div className={`tooltip ${showTooltip ? 'active' : `disabled`}`}>
          Copied
        </div>
      </div>
    </div >
  )
}

export { Input }