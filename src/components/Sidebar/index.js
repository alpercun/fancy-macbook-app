import React from 'react'
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg'
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg'
import { ReactComponent as DoubleArrowRight } from '../../assets/svg/double-arrow-right.svg'
import { ReactComponent as DoubleArrowLeft } from '../../assets/svg/double-arrow-left.svg'
import { Input } from '../Input'
import { AddApp } from '../AddApp'

const Sidebar = ({ isOpen, setIsOpen, inputData }) => {
  return (
    <div className={isOpen ? 'sidebar' : 'sidebar-close'}>
      <div className="on-off"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <DoubleArrowLeft /> : <DoubleArrowRight />}
      </div>
      <div>
        CMA
      </div>
      <div className="download">
        <div className="logo">
          <DownloadIcon />
        </div>
        {
          isOpen && <div className="content">
            Download
          </div>
        }
      </div>
      <div className="github">
        <div className="logo">
          <GithubIcon />
        </div>
        {
          isOpen && <div className="content">
            Github
          </div>
        }
      </div>
      <AddApp isOpen={isOpen} />
      <Input isOpen={isOpen} getData={inputData} />
    </div>
  )
}

export { Sidebar }