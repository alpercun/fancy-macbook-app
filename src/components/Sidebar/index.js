import React from 'react'
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg'
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg'
import { ReactComponent as DoubleArrowRight } from '../../assets/svg/double-arrow-right.svg'
import { ReactComponent as DoubleArrowLeft } from '../../assets/svg/double-arrow-left.svg'

const Sidebar = ({ open, setOpen }) => {

  return (
    <div className={open ? 'sidebar' : 'sidebar-close'}>
      <div className="on-off"
        onClick={() => setOpen(!open)}
      >
        {open ? <DoubleArrowLeft /> : <DoubleArrowRight />}
      </div>
      <div>
        MBA
      </div>
      <div className="download">
        <div className="logo">
          <DownloadIcon />
        </div>
        {
          open ? <div className="content">
            Download
          </div> : null
        }
      </div>
      <div className="github">
        <div className="logo">
          <GithubIcon />
        </div>
        {
          open ? <div className="content">
            Github
          </div> : null
        }
      </div>
    </div>
  )
}

export { Sidebar }