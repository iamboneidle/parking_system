import React from 'react';
import './MyModalFilling.css'

export default function MyModalFilling({setVisible}) {
    return (
        <div>
            <div className='modal_filling_wrapper'>
                <input className='modal_filling_input' type='text' placeholder='name'/>
                <input className='modal_filling_input' type='text' placeholder='surname'/>
                <input className='modal_filling_input' type='text' placeholder='phone number'/>
                <input className='modal_filling_input' type='text' placeholder='car registration number'/>
                <button className='modal_filling_submit'>
                    submit
                </button>
                <button className='modal_filling_exit' onClick={() => setVisible(false)}>
                    exit
                </button>
            </div>
        </div>
        
    )
}
