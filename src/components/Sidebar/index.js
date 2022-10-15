import React from 'react'
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg'
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg'
import { ReactComponent as DoubleArrowRight } from '../../assets/svg/double-arrow-right.svg'
import { ReactComponent as DoubleArrowLeft } from '../../assets/svg/double-arrow-left.svg'
import { Input } from '../Input'
import { AddApp } from '../AddApp'

const Sidebar = ({ isOpen, setIsOpen, inputData }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
      <div className="bar right delay" />

      <div className="item-wrapper">
        <div className='item-top'>
          <div className='item'>
            CMA
          </div>
          <div className="download item">
            <div className="logo">
              <DownloadIcon />
            </div>
            {
              isOpen && <div className="content">
                Download
              </div>
            }
          </div>
          <div className="github item">
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
        <div className="on-off item"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <DoubleArrowLeft /> : <DoubleArrowRight />}
        </div>
      </div>
    </div>
  )
}

export { Sidebar }