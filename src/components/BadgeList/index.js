import { useRef, useState } from 'react'
import { Badge } from '../Badge'
import { ReactComponent as ExpandLeftArrow } from '../../assets/svg/expand-left-arrow.svg'
import { ReactComponent as ExpandRightArrow } from '../../assets/svg/expand-right-arrow.svg'

const badgeTypes = ['cli', 'productivity', 'security', 'apperance', 'system', 'music'];

const BadgeList = ({ addSearchCategory }) => {
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  let scrl = useRef(null);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="badge-list">
      {scrollX !== 0 && (
        <div className='icon'>
          <ExpandLeftArrow onClick={() => slide(-75)} />
        </div>
      )}
      <div ref={scrl} onScroll={scrollCheck} className='scroll-badge-content'>
        {
          badgeTypes.map(
            (category, index) =>
              <Badge category={category} key={index} addSearchCategory={addSearchCategory} />
          )
        }
      </div>
      {!scrolEnd && (
        <>
          <div className='icon'>
            <ExpandRightArrow onClick={() => slide(+75)} />
          </div>
        </>
      )}
    </div>
  )
}

export { BadgeList }