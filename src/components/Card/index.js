import React, { useState, useEffect } from "react";
import { ActionButton } from "../ActionButton";
import { BadgeList } from "../BadgeList";

const Card = ({ data, isAdded, addToInput, removeFromInput }) => {
  const { logo, name, description, categories, suggester } = data;

  const [showActionButton, setShowActionButton] = useState(false);
  const showButton = () => setShowActionButton(true);
  const hideButton = () => !isAdded && setShowActionButton(false);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) {
      setShowActionButton(true);
    }
  }, [isMobile]);

  return (
    <div
      className="card"
      onMouseEnter={showButton}
      onMouseLeave={hideButton}
      onClick={isAdded ? removeFromInput : addToInput}
    >
      <div className="header">
        <div className="logo">
          <img src={logo} alt={name} />
        </div>
        <div className="right">
          <div className="name">{name}</div>
          {suggester && (
            <div className="suggester">
              <p>Suggested by</p>
              <img src={`https://avatars.githubusercontent.com/${suggester}`} alt="suggester-avatar" />
              <p>{suggester}</p>
            </div>
          )}
        </div>
      </div>
      <div className="body">{description}</div>
      <div className="categories">
        <div className="badge-list-wrapper" >
          <BadgeList badgeTypes={categories} slideOffset={100} data={data} />
        </div>
      </div>
      {showActionButton && <ActionButton addToInput={addToInput} removeFromInput={removeFromInput} isAdded={isAdded} />}
    </div>
  );
};

export { Card };
