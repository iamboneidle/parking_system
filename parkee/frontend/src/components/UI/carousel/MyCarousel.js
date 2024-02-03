import React, { useState } from 'react';
import './MyCarousel.css';
import IconButton from '../buttons/carouselButton/IconButton';


export default function MyCarousel({children}) {
    const [activeId, setActiveId] = useState(0)

    const prev = () => {
        setActiveId(activeId => {
            if (activeId > 0) {
                return activeId - 1
            } else {
                return activeId
            }
        })
    }

    const next = () => {
        setActiveId(activeId => {
            if (activeId < children.length - 1) {
                return activeId + 1
            } else {
                return activeId
            }
        })
    }

  return (
    <div className='slider-wrap'>
        <div className='slider__actions'>
            <IconButton 
                direction='left' 
                onClick={prev}
                isDisabled={activeId === 0}
            />
            <IconButton 
                direction='right' 
                onClick={next}
                isDisabled={activeId === children.length - 1}
            />
        </div>
        <div className='slider'>
            {children.map((slide, idx) => (
                <div className={`slide${idx === activeId ? ' active' : ''}`}>
                    {slide}
                </div>
            ))}
        </div>
    </div>
  )
}

