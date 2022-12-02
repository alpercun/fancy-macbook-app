import { ReactComponent as Img1 } from '../../assets/image/img-1.svg'
import { ReactComponent as Img2 } from '../../assets/image/img-2.svg'
import { ReactComponent as Img3 } from '../../assets/image/img-3.svg'
import { ReactComponent as Img4 } from '../../assets/image/img-4.svg'
import { ReactComponent as Img5 } from '../../assets/image/img-5.svg'
import { ReactComponent as Img6 } from '../../assets/image/img-6.svg'
import { ReactComponent as Img7 } from '../../assets/image/img-7.svg'
import { ReactComponent as Img8 } from '../../assets/image/img-8.svg'
import { ReactComponent as Img9 } from '../../assets/image/img-9.svg'
import { ReactComponent as Img10 } from '../../assets/image/img-10.svg'
import { ReactComponent as Img11 } from '../../assets/image/img-11.svg'
import { ReactComponent as Img12 } from '../../assets/image/img-12.svg'
import { Terminal } from '../Terminal'


const Welcome = () => {
  return (
    <div className="welcome">
      <div className='app-wrapper-1'>
        <Img1 className='application app-1' />
        <Img2 className='application app-2' />
        <Img3 className='application app-3' />
        <Img4 className='application app-4' />
        <Img5 className='application app-5' />
      </div>

      <div className='app-wrapper-2'>
        <Img6 className='application app-6' />
        <Img7 className='application app-7' />
        <Img8 className='application app-8' />
        <Img9 className='application app-9' />
      </div>

      <div className='app-wrapper-3'>
        <Img10 className='application app-10 ' />
        <Img11 className='application app-11' />
        <Img12 className='application app-12' />
      </div>
      <div className='welcome-header'>Find apps that suit you</div><br />
      <div className='welcome-description'>Download the best apps for you to customize<br /> your Mac.</div>
      <Terminal />
    </div >
  )
}

export { Welcome }