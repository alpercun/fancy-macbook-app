import { ReactComponent as CloseIcon } from '../../assets/svg/cross.svg'

const SearchItem = ({ item, removeSearchItem }) => {
  const handleClickCloseIcon = () => {
    console.log('close icon clicked', item)
    removeSearchItem(item)
  }

  return (
    <div className="search-item">
      {item}
      <CloseIcon
        className="close-icon"
        onClick={handleClickCloseIcon}
      />
    </div>
  )
}

export { SearchItem }