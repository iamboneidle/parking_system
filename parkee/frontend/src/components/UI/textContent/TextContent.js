import React from 'react';
import './TextContent.css';
import MyCarousel from '../carousel/MyCarousel';
import photo_1 from '../../../../static/images/parkingImages/photo_1.png';
import photo_2 from '../../../../static/images/parkingImages/photo_2.png';
import photo_3 from '../../../../static/images/parkingImages/photo_3.png';
import photo_4 from '../../../../static/images/parkingImages/photo_4.png';
import photo_5 from '../../../../static/images/parkingImages/photo_5.png';
import photo_6 from '../../../../static/images/parkingImages/photo_6.png';
import photo_7 from '../../../../static/images/parkingImages/photo_7.png';


export default function TextContent() {
  return (
    <div className='text-content'>
        <div className='text-content__grid'>
            <p className='p-descr'>
                Some words about our parking system
            </p>
        </div>
        <MyCarousel>
            <img src={photo_1} alt='Slide 1' />
            <img src={photo_2} alt='Slide 2' />
            <img src={photo_3} alt='Slide 3' />
            <img src={photo_4} alt='Slide 4' />
            <img src={photo_5} alt='Slide 5' />
            <img src={photo_6} alt='Slide 6' />
            <img src={photo_7} alt='Slide 7' />
        </MyCarousel>
    </div>
  )
}
