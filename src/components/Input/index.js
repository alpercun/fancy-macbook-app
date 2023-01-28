import React, { useState } from 'react'
import { ReactComponent as Copy } from '../../assets/svg/copy.svg'

import { AppNameList } from '../AppNameList';

const Input = ({ getData, isOpen, removeFromInput }) => {
  const installCommandHomebrew = `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)";`

  let result = ["brew install --cask"];
  let addedApps = [];


  const [showTooltip, setShowTooltip] = useState(false);
  const [shouldInstall, setShouldInstall] = useState(false);

  const formatData = (data) => {
    data.forEach(item => {
      addedApps.push(item.name);
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
    if (addedApps.length === 0) return false;

    return true;
  }

  const handleShouldInstall = () => {
    setShouldInstall(!shouldInstall);
  }

  if (shouldInstall) {
    result.unshift(installCommandHomebrew);
  }

  if (addedApps.length > 0) {
    result.push(addedApps.join(' '));
  }

  return (
    <div className={`input item ${isOpen && isAdded() ? 'sidebar-expand' : isOpen ? 'open' : `close ${!isAdded() && 'disabled'}`}`}>
      {isOpen && <div className="input-content">
        <AppNameList getData={getData} removeFromInput={removeFromInput} />
      </div>}
      {
        isOpen && 
        <label className='input-checkbox'>
          <input type="checkbox" onChange={handleShouldInstall} />
          Install brew
        </label>
      }
      <div
        onClick={copyToClipboard}
        className={`copy ${!isOpen && isAdded() ? 'background-disabled' : isAdded() ? 'active' : 'disabled'}`}
      >
        {addedApps.length >= 1 && !isOpen && <div className="app-count">
          {addedApps.length}
        </div>}
        {isOpen && 'Copy to clipboard'}
        <Copy />
        <div className={`tooltip ${showTooltip ? `active ${isOpen && 'open'}` : 'disabled'}`}>
          Copied
        </div>
      </div>
    </div >
  )
}

export { Input }