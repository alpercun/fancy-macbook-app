import React, { useEffect, useState } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg'

const Search = ({ setFilteredKeyword, addSearchItem, scrollToInput, searchInputRef }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleClickCloseIcon = () => {
    setSearch("");
  }

  const handleClickEnter = (e) => {
    if (e.key === "Enter") {
      addSearchItem(e.target.value);
      setSearch("");
    }
  }


  useEffect(() => {
    setFilteredKeyword(search);
  })

  return (
    <div ref={searchInputRef} className='search-wrapper'>
      <div
        onClick={scrollToInput}
        className="search">
        <div>
          <SearchIcon className="search-icon" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleClickEnter}
        />
        {search.length > 0 &&
          <CloseIcon
            className="close-icon"
            onClick={handleClickCloseIcon}
          />
        }
      </div>
    </div>
  )
}

export { Search }