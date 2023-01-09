import React,  {useEffect} from 'react'
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg'
import { ReactComponent as DoubleArrowRight } from '../../assets/svg/double-arrow-right.svg'
import { ReactComponent as DoubleArrowLeft } from '../../assets/svg/double-arrow-left.svg'
import { Input } from '../Input'
import { AddApp } from '../AddApp'

const Sidebar = ({ isOpen, setIsOpen, inputData }) => {

  useEffect(() => {
    if (isOpen && window.innerWidth <= 500) {
      document.body.classList.add('stop-scrolling')
    } else {
      document.body.classList.remove('stop-scrolling')
    }
  }, [isOpen])

  return (
    <div className='sidebar-wrapper'>
      <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
        <div className="bar right delay" />

        <div className="item-wrapper">
          <div className='item-top'>
            <div className='item'>
              CMA
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
          <div className="sidebar-toggle item"
            onClick={() => {setIsOpen(!isOpen)}}
          >
            {isOpen ? <DoubleArrowLeft /> : <DoubleArrowRight />}
          </div>
        </div>
      </div>

      {
        isOpen && 
          <div 
            className='backdrop'
            onClick={() => setIsOpen(false)}
          />
      }

    </div>
  )
}

export { Sidebar }