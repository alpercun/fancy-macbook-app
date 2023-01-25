import { useRef } from 'react';

const MagicalBorders = (props) => {
  const wrapper = useRef(null);

  const onMouseMove = (e) => {
    Array.from(wrapper.current.children).forEach((el) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <div className={'magical-borders'}
      onMouseMove={onMouseMove}
      ref={wrapper}>
      {props.children}
    </div>
  );
};

export {MagicalBorders}