import React from 'react';

import { AppName } from '../AppName';

const AppNameList = ({ getData, removeFromInput }) => {
  return (
    <div className='app-name-list'>
      <div className='app-name-list-command'>brew install --cask</div>
      {getData.map((item, index) =>
        <AppName
          key={index}
          data={item}
          removeFromInput={() => removeFromInput(item)}
        />
      )}
    </div>
  );
};

export { AppNameList };