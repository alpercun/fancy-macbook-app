import { SearchItem } from '../SearchItem'

const SearchItemList = ({ searchItems, removeSearchItem }) => {
  return (
    <div className="search-item-list">
      {searchItems.map((item, index) => (
        <SearchItem
          key={index}
          item={item}
          removeSearchItem={removeSearchItem}
        />
      ))}
    </div>
  )
}

export { SearchItemList }