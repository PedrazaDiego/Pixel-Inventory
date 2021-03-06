import React, {useState} from 'react'
import PostProduct from '../subcomponents/PostProduct'
import PostProvider from '../subcomponents/PostProvider'



export default function LeftBar() {

const [conditional, updateConditional] = useState(null)




    return (
        <div className='inventory-bar'>
            <div>
                <img src="https://i.imgur.com/7o4xbdI.png" alt='pixel-fish'/> 
                <img src="https://i.imgur.com/pyFAvAM.png" alt='pixel-sunflower'/> 
                <img src="https://i.imgur.com/69lIg1J.png" alt='pixel-carrot'/> 
                <img src="https://i.imgur.com/xReF5Dk.png" alt='pixel-apple'/> 
                <img src="https://i.imgur.com/BV6u54L.png" alt='pixel-meat'/>
            </div>
            <div>
                <h2>Add to your inventory: </h2>
            </div>
            <div>
                <button onClick={() => updateConditional(0)}>Product</button>
                <button onClick={() => updateConditional(1)}>Provider</button>
                {conditional === 0 ? <PostProduct /> : null}
                {conditional === 1 ? <PostProvider /> : null}
            </div>
        </div>
    )
}
