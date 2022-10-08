import React, { useRef } from 'react'
import { ReactComponent as AddSquare } from '../../assets/svg/add-square.svg'
import { issueTemplate } from '../../constants';
const AddApp = ({ isOpen }) => {
  const body = useRef(encodeURI(issueTemplate));

  const title = encodeURI('[AddApp]: Type the title here...');

  return (
    <a
      className="add"
      href={`https://github.com/alpercun/custom-macbook-apps/issues/new?title=${title}&body=${body.current}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="logo">
        <AddSquare />
      </div>
      {
        isOpen && <div className="content">
          Add App
        </div>
      }
    </a>
  )
}

export { AddApp }