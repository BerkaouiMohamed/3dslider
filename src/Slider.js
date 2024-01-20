import './slider.css'
import can from './images/Untitled-1.png'
import makette from './images/Untitled-2.png'
import lime1 from './images/lim1.png'
import lime2 from './images/lim2.png'
import lime3 from './images/lim3.png'
import lime4 from './images/lim4.png'
import cider1 from "./images/cider1.png"
import cider2 from "./images/cider2.png"
import cider3 from "./images/cider3.png"
import cider4 from "./images/cider4.png"
import na3na3a from './images/na3na3a.png'
import { useMouse } from 'react-use';
import { useEffect, useRef, useState } from 'react'

function Slider() {
  const [toggle, setToggle] = useState(true)

  const ref = useRef(null);
  const { docX } = useMouse(ref);
  useEffect(() => {
    const handleMousemove = () => {
      if (docX >750 && !toggle) {
        setToggle(true);
      } else if (docX <=750 && toggle) {
        setToggle(false);
      }
    }
    handleMousemove()
    })
  return (
    <div className='slider-container' ref={ref} >
      <div className='background'>

        <div className='background1' style={{ transform: toggle ? "translate(0)" : "translate(-100%)" }}></div>
        <div className='background2' style={{ transform: toggle ? "translate(0)" : "translate(-100%)" }}></div>

      </div>

      <div className='texts'>

        <div className='text1' style={{ transform: toggle ? "translate(0)" : "translateY(-100%)" }}>CIDER</div>
        <div className='text2' style={{ transform: toggle ? "translate(0)" : "translate(-100%)" }}>LIME</div>

      </div>
      <div className='slider-images'>
        <div className='wrapper'>
          <img src={can} alt=' ' />
          <img src={makette} alt=' ' className={toggle ? 'makette imge' : "makette2 imge"} />
          <img src={makette} alt=' ' className={toggle ? 'makette imge' : "makette2 imge"} />

          <img src={makette} alt=' ' className={toggle ? 'makette imge' : "makette2 imge"} />
          <img src={makette} alt=' ' style={{ mixBlendMode: "overlay" }} className={toggle ? 'makette imge' : "makette2 imge"} />

        </div>


        <div className='lime-wrapper' style={{ transform: !toggle ? "translateY(0)" : "scale(2) translateY(-100%)" }}>
          <img src={lime1} alt='' className='items'/>
          <img src={lime2} alt='' className='items'/>
          <img src={lime3} alt=''className='items' />
          <img src={lime4} alt='' className='items'/>
          <img src={lime1} alt='' className='shadow' />
          <img src={lime2} alt='' className='shadow' />
          <img src={lime3} alt='' className='shadow' />
          <img src={lime4} alt='' className='shadow' />

        </div>
        <div className='cider-wrapper' style={{ transform: !toggle ? " translateY(100%)" : " translateY(0%)" }} >

          <img src={cider1} alt=''className='items' />
          <img src={cider2} alt='' className='items'/>
          <img src={cider3} alt=''className='items' />
          <img src={cider4} alt=''className='items' />
          <img src={cider1} alt=''className='shadow' />
          <img src={cider2} alt=''className='shadow' />
          <img src={cider3} alt=''className='shadow' />
          <img src={cider4} alt=''className='shadow' />


        </div>
        <div className='na3na3a'>
          <img src={na3na3a} alt='' style={{ transform: !toggle ? 'rotateY(180deg)' : 'rotateY(0)' }} />
      
        </div>
        <div className='bottleshadow'></div>
      </div>
    </div>
  )
}

export default Slider
