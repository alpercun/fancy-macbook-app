import { useRef, useState, useEffect } from "react";
import { Badge } from "../Badge";
import { ReactComponent as ExpandLeftArrow } from "../../assets/svg/expand-left-arrow.svg";
import { ReactComponent as ExpandRightArrow } from "../../assets/svg/expand-right-arrow.svg";

const BadgeList = ({ addSearchCategory, badgeTypes, slideOffset, data }) => {
  const [scrollStart, setScrollStart] = useState(0);
  const [hasMoreItem, setHasMoreItem] = useState(false);
  let scrollWrapperRef = useRef(null);
  let badgeListRef = useRef(null);

  useEffect(() => {
    scrollCheck();
  }, [data]);

  const slide = (event, direction) => {
    const shift = direction === "left" ? -slideOffset : slideOffset;
    event.preventDefault();
    event.stopPropagation();
    scrollWrapperRef.current.scrollLeft += shift;
    setScrollStart(scrollStart + shift);
  };

  const scrollCheck = () => {
    const scrollHead = scrollWrapperRef.current.scrollLeft + badgeListRef.current.scrollWidth + 30;
    const hasOnePage = scrollWrapperRef.current.scrollWidth < badgeListRef.current.scrollWidth;

    if (hasOnePage) {
      setHasMoreItem(false);
      return;
    }

    if (scrollHead >= scrollWrapperRef.current.scrollWidth) {
      setHasMoreItem(false);
    } else {
      setHasMoreItem(true);
    }
  };

  return (
    <div className="badge-list-wrapper">
      <div className="badge-list" ref={badgeListRef}>
        {scrollStart !== 0 && (
          <div className="icon scroll-button scroll-button-start" onClick={(event) => slide(event, "left")}>
            <ExpandLeftArrow />
            <div className="icon-ghost-left" />
          </div>
        )}
        <div ref={scrollWrapperRef} onScroll={scrollCheck} className="scroll-badge-content">
          {badgeTypes.map((category, index) => (
            <Badge category={category} key={index} addSearchCategory={addSearchCategory} />
          ))}
        </div>
        {hasMoreItem && (
          <div className="icon scroll-button scroll-button-end" onClick={(event) => slide(event, "right")}>
            <div className="icon-ghost-right" />
            <ExpandRightArrow />
          </div>
        )}
      </div>
    </div>
  );
};

export { BadgeList };
