import React, {useState} from 'react'
import axios from 'axios'
import PostProduct from '../subcomponents/PostProduct'
import PostProvider from '../subcomponents/PostProvider'



export default function LeftBar() {

const [conditional, updateConditional] = useState(null)




    return (
        <div>
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
