import React from 'react';
import './MyModal.css';
import MyModalFilling from './modalFilling/MyModalFilling';


export default function MyModal({children, visible, setVisible}) {
    
    console.log('fe')

    return (
        <div className={'my_modal_' + (
                visible 
                    ? 'visible' 
                    : 'invisible'
            )}>
            <div className='my_modal_contents'>
                <MyModalFilling setVisible={setVisible}/>
            </div>
        </div>
    )
}
